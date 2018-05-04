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

class FillBDDCommand extends Command
{
    private $doctrine;
    private $slug;

    public function __construct(Doctrine $doctrine, SlugConverter $slug)
    {

        $this->doctrine = $doctrine;
        $this->slug = $slug;
        parent::__construct();
    }

    protected function configure()
    {
        $this->setName('app:fillbdd:cron')
        ->setDescription('Fill BDD with API all day')
        ->setHelp('This command is only for cron');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        // to say process begin
        $output->writeln([
            'Begin process to fill BDD',
            '=========================',
            ''
        ]);

        // to say firt step
        $output->writeln([
            'Get last insert of request log',
            '------------------------------',
            ''
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
            ''
        ]);

        // Define the limite of data (max: 50)
        $limit = 1;

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

        $api = [];
        $maxRequest = 10;
        $progressBar = new ProgressBar($output, count($maxRequest));
        $progressBar->start();
        for($i = 0; $i < $maxRequest; $i++)
        {
            // reset if current pages > total pages
            $lastPage = ($lastPage+1 > $totalPage) ? 0 : $lastPage;

            // calculate offset
            $offset = $limit * $lastPage;

            $response = $this->getApiData($offset, $limit);
            $array = json_decode($response, true);
            $api = array_merge($array, $api);

            $lastPage++;
            $progressBar->advance();
        }
        $progressBar->finish();

        $insert = '';

        $output->writeln([
            '',
            'sort data',
            '---------',
            ''
        ]);

        $progressBar = new ProgressBar($output, count($api));
        $progressBar->start();
        foreach($api as $data)
        {
            $game = $this->doctrine->getRepository(Game::class)->findOneBy(['title' => $data['name']]);
            $update = [];
            $create = [];
            if($game)
            {
                $update[] = $data;
            }
            else
            {
                $create[] = $data;
            }
            
            $insert = $insert . '- ' . $data['name'] . ' ';

            $progressBar->advance();
        }
        $progressBar->finish();

        $output->writeln([
            '',
            'Fill the BDD',
            '----------',
            ''
        ]);

        $output->writeln([
            'Create new games',
        ]);

        $this->createGame($create, $output);

        $output->writeln([
            '',
            'Update games',
        ]);

        $this->updateeGame($create, $output);

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
        $history->setLog($insert);
        $em->persist($history);
        $em->flush();

        $output->writeln('End of process');
    }

    public function createGame($apiData, $output)
    {
        $progressBar = new ProgressBar($output, count($apiData));
        $progressBar->start();
        
        $em = $this->doctrine->getManager();
        foreach($apiData as $data)
        {
            $categories = (!isset($data['cover'])) ? null : $this->checkGameCategories($data['genres']);
        
            $game = new Game();
            $game->setTitle((!isset($data['name'])) ? 'undefined' : $data['name']);
            $game->setSlug($this->slug->toSlug($data['name']));
            $game->setCover((!isset($data['cover'])) ? null : $data['cover']['url']);
            $game->addGamecategories($categories);
            $em->persist($game);
       
            $progressBar->advance();
        }
        $em->flush();

        $progressBar->finish();
        
    }

    public function UpdateGame($apiData, $output)
    {
        $progressBar = new ProgressBar($output, count($apiData));
        $progressBar->start();

        $em = $this->doctrine->getManager();
        foreach($apiData as $data)
        {
            $categories = (!isset($data['cover'])) ? null : $this->checkGameCategories($data['genres']);
        
            $game = $this->doctrine->getRepository(Game::class)->findOneBy(['name' => $data['name']]);
            $game->setTitle((!isset($data['name'])) ? 'undefined' : $data['name']);
            $game->setSlug($this->slug->toSlug($data['name']));
            $game->setCover((!isset($data['cover'])) ? null : $data['cover']['url']);
            $game->addGamecategories($categories);
            $em->persist($game);
       
            $progressBar->advance();
        }
        $em->flush();

        $progressBar->finish();
    }

    public function getApiData($offset, $limit)
    {
        $curl = curl_init(); // 

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://api-endpoint.igdb.com/games/?limit='.$limit.'&offset='.$offset.'&fields=name,cover,game_modes,genres&expand=genres,game_modes',
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

    public function checkGameCategories($apiCategories)
    {
        $categories = [];
        foreach($apiCategories as $category)
        {
            $DBCategory = $this->doctrine->getRepository(GameCategory::class)->findOneBy(['title' => $category['name']]);
            if($DBCategory)
            {
                $categories[] = $DBCategory;
            }
            else
            {
                $categories[] = $this->createNewCategory($category['name'], $this->slug->toSlug($category['name']));
            }
        }
        
        return $categories;
    }
    
    public function createNewCategory($name, $slug)
    {
        $em = $this->doctrine->getManager();
        $category = new GameCategory();
        $category->setTitle($name);
        $category->setSlug($slug);
        $em->persist($category);
        $em->flush();

        return $category;
    }
}
