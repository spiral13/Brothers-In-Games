<?php 

namespace AppBundle\Command;

use AppBundle\Entity\Game;
use AppBundle\Entity\GameCategory;
use AppBundle\Entity\HistoryFill;
use AppBundle\Service\SlugConverter;
use Symfony\Bridge\Doctrine\RegistryInterface as Doctrine;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class FillBddWithApiCommand extends Command
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
        $this->setName('app:fillbddApi:cron')
        ->setDescription('Fill BDD with API genre(category) data all day')
        ->setHelp('This command is only for cron');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        // to say process begin
        $output->writeln([
            '',
            'Begin process to fill BDD',
            '=========================',
        ]);

        // ******************************************
        // ********** Fill GamesCategories **********
        // ******************************************

        // to say firt step
        $output->writeln([
            '',
            '',
            'Fill gameCategories',
            '-------------------'
        ]);

        // Launch & Stock request API
        $response = $this->getApiGameCategoriesData(0, 50);
        $api = json_decode($response, true);

        // Sorted Data to update & create
        $sortedResults = $this->sortedData('category', $api, $output);

        $output->writeln([
            '',
            '',
            'Fill the BDD GameCategory',
            '----------',
            ''
        ]);

        $output->writeln([
            'Create new categories',
        ]);

        $this->createCategories($sortedResults['create'], $output);

        $output->writeln([
            '',
            'Update categories',
        ]);

        $this->updateCategories($sortedResults['update'], $output);

        unset($response);
        unset($api);
        unset($sortedResults);

        // ******************************************
        // ********** Fill GamesCategories **********
        // ******************************************

        // to say firt step
        $output->writeln([
            '',
            '',
            'Fill games',
            '-------------------',
            ''
        ]);

        // to say firt step
        $output->writeln([
            'Get last insert of request log',
            '------------------------------',
        ]);

        // Get the last insert of request log in the BDD
        $lastInsert = $this->doctrine->getRepository(HistoryFill::class)->findOneBy([], ['id' => 'DESC']);
        $lastName = (!$lastInsert) ? 'nothing' : $lastInsert->getName();
        $lastUrl = (!$lastInsert) ? 'nothing' : $lastInsert->getUrl();
        $lastMaxData = (!$lastInsert) ? 0 : $lastInsert->getMaxData();
        $lastPage = (!$lastInsert) ? 0 : $lastInsert->getPage();

        // show last log
        $output->writeln([
            'last name: '.$lastName,
            'last url: '.$lastUrl,
            'last max data: '.$lastMaxData,
            'last page: '.$lastPage,
            ''
        ]);
        
        // To say second step
        $output->writeln([
            'Get data from API',
            '-----------------',
        ]);

        // Define the limite of data (max: 50)
        $limit = 50;

        //Get X-count in the header for $limit/page
        stream_context_set_default(
            array(
                'http' => array(
                    'header'=> "user-key: 5194a756bcbf437b105edfc3ded3181d",
                )
            )
        );
        $array = get_headers('https://api-endpoint.igdb.com/games/?limit='.$limit.'&scroll=1', 1);
        $MaxData = $array['X-Count'];

        // calculate total pages
        $totalPage = $MaxData / $limit;

        // configure & launch the query loop
        $api = [];
        $maxRequest = 25;
        $progressBar = new ProgressBar($output, count($maxRequest));
        $progressBar->start();
        for($i = 0; $i < $maxRequest; $i++)
        {
            // reset if current pages > total pages
            $lastPage = ($lastPage+1 > $totalPage) ? 0 : $lastPage;

            // calculate offset
            $offset = $limit * $lastPage;

            $response = $this->getApiGamesData($offset, $limit);
            $array = json_decode($response, true);
            $api = array_merge($array, $api);

            $lastPage++;
            $progressBar->advance();
        }
        $progressBar->finish();

        $output->writeln([
            '',
            '',
            'sort data',
            '---------',
        ]);

        // Sorted Data to update & create
        $sortedResults = $this->sortedData('game', $api, $output);

        $output->writeln([
            '',
            '',
            'Fill the BDD',
            '----------',
            ''
        ]);

        $output->writeln([
            'Create new games',
        ]);

        $this->createGames($sortedResults['create'], $output);

        $output->writeln([
            '',
            'Update games',
        ]);

        $this->updateGames($sortedResults['update'], $output);

        $output->writeln([
            '',
            'Update log',
            '----------',
            ''
        ]);

        $date = new \Datetime();
        $name = 'test';
        $url = 'test';

        $em = $this->doctrine->getManager();
        $history = new HistoryFill();
        $history->setDate($date);
        $history->setPage($lastPage+1);
        $history->setMaxData($MaxData);
        $history->setName($name);
        $history->setUrl($url);
        $history->setLog($this->insert);
        $em->persist($history);
        $em->flush();

        $output->writeln('End of process');
    }

    public function sortedData($type, $api, $output)
    {
        $update = [];
        $create = [];

        $progressBar = new ProgressBar($output, count($api));
        $progressBar->start();
        if($type == 'game')
        {
            foreach($api as $data)
            {
                $dbData = $this->doctrine->getRepository(Game::class)->findOneBy(['title' => $data['name']]);
                if($dbData)
                {
                    $update[] = $data;
                }
                else
                {
                    $create[] = $data;
                }
                $progressBar->advance();
                $this->insert = $this->insert . '- ' . $data['name'] . ' ';
            }   
        }
        elseif($type == 'category')
        {
            foreach($api as $data)
            {
                $dbData = $this->doctrine->getRepository(GameCategory::class)->findOneBy(['title' => $data['name']]);
                if($dbData)
                {
                    $update[] = $data;
                }
                else
                {
                    $create[] = $data;
                }
                $progressBar->advance();
            }
        }
        $progressBar->finish();

        return $array = ['update' => $update, 'create' => $create];
    }

    public function createCategories($apiData, $output)
    {
        $progressBar = new ProgressBar($output, count($apiData));
        $progressBar->start();
        
        $em = $this->doctrine->getManager();
        foreach($apiData as $data)
        {   
            if($data['name'])
            {
                $category = new GameCategory();
                $category->setApiId((!isset($data['id'])) ? null : $data['id']);
                $category->setTitle($data['name']);
                $category->setSlug($this->slug->toSlug($data['name']));
                $em->persist($category);
            }     
            $progressBar->advance();
        }
        $em->flush();

        $progressBar->finish();
    }

    public function updateCategories($apiData, $output)
    {
        $progressBar = new ProgressBar($output, count($apiData));
        $progressBar->start();

        $em = $this->doctrine->getManager();
        foreach($apiData as $data)
        {      
            if($data['name'])
            {
                $category = $this->doctrine->getRepository(GameCategory::class)->findOneBy(['title' => $data['name']]);
                $category->setApiId((!isset($data['id'])) ? null : $data['id']);
                $category->setTitle($data['name']);
                $category->setSlug($this->slug->toSlug($data['name']));
                $em->persist($category);
       
            }
            $progressBar->advance();
        }
        $em->flush();

        $progressBar->finish();
    }

    public function createGames($apiData, $output)
    {
        $progressBar = new ProgressBar($output, count($apiData));
        $progressBar->start();
        
        $em = $this->doctrine->getManager();
        foreach($apiData as $data)
        {
            if($data['name'])
            {
                $categories = (!isset($data['genres'])) ? null : $this->getGameCategories($data['genres']);
        
                $game = new Game();
                $game->setApiId((!isset($data['id'])) ? null : $data['id']);
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
            if($data['name'])
            {
                $categories = (!isset($data['genres'])) ? null : $this->getGameCategories($data['genres'], $data['id']);

                $game = $this->doctrine->getRepository(Game::class)->findOneBy(['title' => $data['name']]);
                if($game)
                {
                    $game->setApiId((!isset($data['id'])) ? null : $data['id']);
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
                'Cache-Control: no-cache',
                'user-key: 5194a756bcbf437b105edfc3ded3181d'
            ),
        ));
        $response = curl_exec($curl);

        curl_close($curl);

        return $response;
    }

    public function getApiGameCategoriesData($offset = 0, $limit = 50)
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://api-endpoint.igdb.com/genres/?limit='.$limit.'&offset='.$offset.'&fields=name',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => array(
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
                if($isset = false)
                {
                    $categories[] = $DBCategory;
                }
            }
        }
        
        return $categories;
    }
}