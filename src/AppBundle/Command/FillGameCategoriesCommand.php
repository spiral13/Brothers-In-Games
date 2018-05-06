<?php 

namespace AppBundle\Command;

use AppBundle\Entity\GameCategory;
use AppBundle\Service\SlugConverter;
use Symfony\Bridge\Doctrine\RegistryInterface as Doctrine;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class FillGameCategoriesCommand extends Command
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
        $this->setName('app:fill:game-category')
        ->setDescription('Fill BDD with API genres(category) data')
        ->setHelp('This command allows you to fill the GameCategory table with the IGDB API');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    { 
        $output->writeln(['', 
            '==============================', 
            'Begin process for GameCategory', 
            '==============================']);
        $output->writeln(['', '',
            'Get gameCategories', 
            '------------------']);

        // Launch request API & stock data in array
        $response = $this->getApiGameCategoriesData(0, 50);
        $api = json_decode($response, true);

        // Sorted Data to update & create
        $sortedResults = $this->sortedData($api, $output);

        $output->writeln(['', '', 
            '-------------------------', 
            'Fill the BDD GameCategory', 
            '-------------------------']);

        $output->writeln(['', 
            'Create new categories', 
            '---------------------']);
        $this->createCategories($sortedResults['create'], $output);

        $output->writeln(['', 
            'Update categories', 
            '-----------------']);
        $this->updateCategories($sortedResults['update'], $output);

        $output->writeln(['', '', 'End of process']);
    }

    /**
     * Sort data
     * 
     * @param (array: API data), OutputInterface
     * 
     * @return array
     */
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
                $dbData = $this->doctrine->getRepository(GameCategory::class)->findOneBy(['apiId' => $data['id']]);
                if($dbData)
                {
                    $update[] = $data;
                }
                else
                {
                    $create[] = $data;
                }
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

    /**
     * Create new category
     * 
     * @param (array: API data), OutputInterface
     */
    public function createCategories($apiData, $output)
    {
        $progressBar = new ProgressBar($output, count($apiData));
        $progressBar->start();
        
        $em = $this->doctrine->getManager();
        foreach($apiData as $data)
        {   
            $category = new GameCategory();
            $category->setApiId($data['id']);
            $category->setTitle($data['name']);
            $category->setSlug($this->slug->toSlug($data['name']));
            $em->persist($category);
            $progressBar->advance();
        }
        $em->flush();

        $progressBar->finish();
    }

    /**
     * Update Category
     * 
     * @param (array: API data), OutputInterface
     */
    public function updateCategories($apiData, $output)
    {
        $progressBar = new ProgressBar($output, count($apiData));
        $progressBar->start();

        $em = $this->doctrine->getManager();
        foreach($apiData as $data)
        {      
            $category = $this->doctrine->getRepository(GameCategory::class)->findOneBy(['apiId' => $data['id']]);
            $category->setApiId($data['id']);
            $category->setTitle($data['name']);
            $category->setSlug($this->slug->toSlug($data['name']));
            $em->persist($category);
            $progressBar->advance();
        }
        $em->flush();

        $progressBar->finish();
    }

    /**
     * Connect & get API data
     * 
     * @param offset, limit
     */
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
                "Accept: application/json",
                'Cache-Control: no-cache',
                'user-key: 5194a756bcbf437b105edfc3ded3181d'
            ),
        ));
        $response = curl_exec($curl);

        curl_close($curl);

        return $response;
    }
}