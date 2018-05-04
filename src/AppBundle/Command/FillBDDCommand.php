<?php 

namespace AppBundle\Command;

use AppBundle\Entity\Game;
use AppBundle\Entity\HistoryFill;
use Symfony\Bridge\Doctrine\RegistryInterface as Doctrine;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class FillBDDCommand extends Command
{
    private $doctrine;

    public function __construct(Doctrine $doctrine)
    {
        $this->doctrine = $doctrine;
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
        $output->writeln([
            'Begin process to fill BDD',
            '=========================',
            ''
        ]);

        $output->writeln([
            'Get last insert of request log',
            '------------------------------',
            ''
        ]);

        $lastInsert = $this->doctrine->getRepository(HistoryFill::class)->findOneBy([], ['id' => 'DESC']);
        $currentlyName = (!$lastInsert) ? 'nothing' : $lastInsert->getName();
        $currentlyUrl = (!$lastInsert) ? 'nothing' : $lastInsert->getUrl();
        $currentlyMaxData = (!$lastInsert) ? 0 : $lastInsert->getMaxData();
        $currentlyPage = (!$lastInsert) ? 0 : $lastInsert->getPage();

        $output->writeln([
            'last name: '.$currentlyName,
            'last url: '.$currentlyUrl,
            'last max data: '.$currentlyMaxData,
            'last page: '.$currentlyPage,
            ''
        ]);
        
        $output->writeln([
            'Get data from API',
            '-----------------',
            ''
        ]);

        $limit = 50;

        stream_context_set_default(
            array(
                'http' => array(
                    'header'=> "user-key: 5194a756bcbf437b105edfc3ded3181d",
                )
            )
        );
        $array = get_headers('https://api-endpoint.igdb.com/games/?limit='.$limit.'&scroll=1', 1);

        $MaxData = $array['X-Count'];

        $totalPage = $MaxData / $limit;
        $currentlyPage = ($currentlyPage+1 > $totalPage) ? 0 : $currentlyPage;
        $page = $currentlyPage + 1;

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://api-endpoint.igdb.com/games/?limit='.$limit.'&scroll='.$page.'&fields=name,cover,slug,game_modes,themes&expand=themes,game_modes',
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
        $err = curl_error($curl);

        curl_close($curl);

        $api = json_decode($response, true);

        if ($err) 
        {
            dump($arrayErrors);exit;
        }

        $em = $this->doctrine->getManager();
        $insert = '';

        $output->writeln([
            'Fill the BDD',
            '------------',
            ''
        ]);

        $progressBar = new ProgressBar($output, count($api));
        $progressBar->start();
        foreach($api as $data)
        {

            $output->writeln(' "'. $data['name'] .'" - data processing ');
            $insert = $insert . '- ' . $data['name'] . ' ';

            $game = new Game();
            $game->setTitle($data['name']);
            $game->setSlug($data['slug']);
            $game->setCover($data['cover']['url']);
            $em->persist($game);
            $progressBar->advance();
        }
        $progressBar->finish();
        $em->flush();

        $output->writeln([
            '',
            'Update log',
            '----------',
            ''
        ]);

        $date = new \Datetime();
        $name = 'test';
        $url = 'test';

        $history = new HistoryFill();
        $history->setDate($date);
        $history->setPage($page);
        $history->setMaxData($MaxData);
        $history->setName($name);
        $history->setUrl($url);
        $history->setLog($insert);
        $em->persist($history);
        $em->flush();

        $output->writeln('End of process');
    }
}
