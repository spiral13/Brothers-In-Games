<?php 

namespace AppBundle\Command;

use AppBundle\Entity\Game;
use AppBundle\Entity\GameCategory;
use AppBundle\Entity\HistoryFill;
use AppBundle\Service\SlugConverter;
use Symfony\Bridge\Doctrine\RegistryInterface as Doctrine;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\NullOutput;
use Symfony\Component\Console\Output\OutputInterface;

class FillGamesCommand extends Command
{
    private $doctrine;
    private $slug;
    private $insert;

    public function __construct(Doctrine $doctrine, SlugConverter $slug)
    {
        $this->insert = '';
        $this->doctrine = $doctrine;
        $this->slug = $slug;
        parent::__construct();
    }

    protected function configure()
    {
        $this->setName('app:fill:game')
        ->setDescription('Fill BDD with API games data')
        ->setHelp('This command allows you to fill the Game table with the IGDB API')
        ->addOption('limit', null, InputOption::VALUE_REQUIRED, 'How much answer should be returned (min:1, max: 50)', 50)
        ->addOption('request', null, InputOption::VALUE_REQUIRED, 'How many requests should be sent (min:1, max: 3000)', 25);
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        // ******************************************
        // ********** Fill GamesCategories **********
        // ******************************************

        $command = $this->getApplication()->find('app:fill:game-category');
        $arguments = ['command' => 'app:fill:game-category'];
        $fillInput = new ArrayInput($arguments);
        $command->run($fillInput, $output);

        // ******************************************
        // ********** Fill GamesCategories **********
        // ******************************************

        // ********** Configuration **********

        // Get || Set command params
        $limit = ($input->getOption('limit') < 1 || $input->getOption('limit') > 50) ? 50 : $input->getOption('limit');
        $request = ($input->getOption('request') < 1 || $input->getOption('request') > 3000) ? 25 : $input->getOption('request');

        // set params for header
        stream_context_set_default(
            array(
                'http' => array(
                    'header'=> "user-key: 5194a756bcbf437b105edfc3ded3181d",
                )
            )
        );
        // Get header response
        $header = get_headers('https://api-endpoint.igdb.com/games/?limit='.$limit.'&scroll=1', 1);

        // Get the last insert of request log in the BDD
        $lastInsert = $this->doctrine->getRepository(HistoryFill::class)->findOneBy([], ['id' => 'DESC']);

        // Get || Set params
        $maxData = $header['X-Count'];
        $processedData = (!$lastInsert) ? 0 : $lastInsert->getProcessedData();
        $processedData = ($maxData <= $processedData) ? 0 : $processedData;

        // ********** Begin process **********

        $output->writeln(['', 
            '======================', 
            'Begin process for Game', 
            '======================']);

        $output->writeln(['', '', 
            'Get API games', 
            '-------------']);

        // configure & launch the query loop
        $api = [];
        $progressBar = new ProgressBar($output, count($request));
        $progressBar->start();
        for($i = 0; $i < $request; $i++)
        {
            // reset if current pages > total pages
            $processedData = ($maxData <= $processedData) ? 0 : $processedData;

            $response = $this->getApiGamesData($processedData, $limit);
            $array = json_decode($response, true);
            $api = array_merge($array, $api);

            $processedData += $limit;
            $progressBar->advance();
        }
        $progressBar->finish();

        $output->writeln(['', '', 
            'sort data', 
            '---------']);

        // Sorted Data to update & create
        $sortedResults = $this->sortedData($api, $output);

        $output->writeln(['', '', 
            'Fill the BDD', 
            '------------']);

        $output->writeln(['',
            'Create new games', 
            '----------------']);
        $this->createGames($sortedResults['create'], $output);

        $output->writeln(['', 
            'Update games', 
            '------------']);
        $this->updateGames($sortedResults['update'], $output);

        $output->writeln(['', 'log Updated']);

        $processedPage = (!$lastInsert) ? 0 : $lastInsert->getProcessedPage();

        $em = $this->doctrine->getManager();
        $history = new HistoryFill();
        $history->setMaxData($maxData);
        $history->setRemainingData($maxData - $processedData);
        $history->setProcessedData($processedData);
        $history->setMaxPage($maxData / $limit);
        $history->setRemainingPage(($maxData - $processedData) / $limit);
        $history->setProcessedPage($processedPage + $request);
        $history->setDataPerPage($limit);
        $history->setName('igdb API');
        $history->setUrl('https://api-endpoint.igdb.com/games/?limit='.$limit.'&offset='.$processedPage.'&fields=name,cover,genres');
        $history->setDate(new \Datetime());
        $history->setLog($this->insert);
        $em->persist($history);
        $em->flush();

        $output->writeln(['', '', 'End of process']);
    }

    public function sortedData($api, $output)
    {
        $update = [];
        $create = [];

        $progressBar = new ProgressBar($output, count($api));
        $progressBar->start();
        foreach($api as $key => $data)
        {
            if($data['name'])
            {
                $dbData = $this->doctrine->getRepository(Game::class)->findOneBy(['apiId' => $data['id']]);
                if($dbData)
                {
                    $update[] = $data;
                }
                else
                {
                    $create[] = $data;
                }
                $this->insert = $this->insert . '- ' . $data['name'] . ' ';
            }
            else
            {
                $output->writeln(['#'.$key.' excluded -> name not defined']);
            }
            $progressBar->advance();
        }
        $progressBar->finish();

        return $array = ['update' => $update, 'create' => $create];
    }

    public function createGames($apiData, $output)
    {
        $progressBar = new ProgressBar($output, count($apiData));
        $progressBar->start();
        
        $em = $this->doctrine->getManager();
        foreach($apiData as $data)
        {
            $categories = (!isset($data['genres'])) ? null : $this->getGameCategories($data['genres']);
    
            $game = new Game();
            $game->setApiId($data['id']);
            $game->setTitle($data['name']);
            $game->setSlug($this->slug->toSlug($data['name']));
            $game->setCover((!isset($data['cover'])) ? null : $data['cover']['url']);
            if($categories != null)
            {
                foreach($categories as $category)
                {
                    $game->addGamecategories($category);
                }
            }
            $em->persist($game);
            $progressBar->advance();
        }
        $em->flush();

        $progressBar->finish();
    }

    public function updateGames($apiData, $output)
    {
        $progressBar = new ProgressBar($output, count($apiData));
        $progressBar->start();

        $em = $this->doctrine->getManager();
        foreach($apiData as $key => $data)
        {
            $categories = (!isset($data['genres'])) ? null : $this->getGameCategories($data['genres'], $data['id']);

            $game = $this->doctrine->getRepository(Game::class)->findOneBy(['apiId' => $data['id']]);
            if($game)
            {
                $game->setApiId($data['id']);
                $game->setTitle($data['name']);
                $game->setSlug($this->slug->toSlug($data['name']));
                $game->setCover((!isset($data['cover'])) ? null : $data['cover']['url']);
                if($categories != null)
                {
                    foreach($categories as $category)
                    {
                        $game->addGamecategories($category);
                    }
                }
                $em->persist($game);
            }
            else
            {
                $output->writeln(['', '"' . $data['name'] . '" not updated']);
            }
            $progressBar->advance();
        }
        $em->flush();

        $progressBar->finish();
    }

    public function getApiGamesData($offset, $limit)
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://api-endpoint.igdb.com/games/?limit='.$limit.'&offset='.$offset.'&fields=name,cover,genres',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => array(
                "Accept: application/json",
                'Cache-Control: no-cache',
                'user-key: 5194a756bcbf437b105edfc3ded3181d'
            ),
        ));
        $response = curl_exec($curl);

        curl_close($curl);

        return $response;
    }

    public function getGameCategories($apiCategories, $game = null)
    {
        $categories = [];
        foreach($apiCategories as $category)
        {
            $DBCategory = $this->doctrine->getRepository(GameCategory::class)->findOneBy(['apiId' => $category]);
            if($DBCategory)
            {   
                $isset = false;
                foreach($DBCategory->getGames() as $DBgame)
                {
                    if($game === $DBgame)
                    {
                        $isset = true;
                    }
                }
                if($isset === false)
                {
                    $categories[] = $DBCategory;
                }
            }
        }        
        return $categories;
    }
}