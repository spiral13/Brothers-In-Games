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

        $api = [
            ['title' => 'title01', 'slug' => 'title-01', 'cover' => 'url-de-l\'image'],
            ['title' => 'title02', 'slug' => 'title-02', 'cover' => 'url-de-l\'image'],
            ['title' => 'title03', 'slug' => 'title-03', 'cover' => 'url-de-l\'image'],
            ['title' => 'title04', 'slug' => 'title-04', 'cover' => 'url-de-l\'image']
        ];

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

            $output->writeln('"'. $data['title'] .'" - data processing ');
            $insert = $insert . '- ' . $data['title'] . ' ';

            $game = new Game();
            $game->setTitle($data['title']);
            $game->setSlug($data['slug']);
            $game->setCover($data['cover']);
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


        $page = $currentlyPage + 1;
        $date = new \Datetime();
        $MaxData = 12000;
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
