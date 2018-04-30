<?php 

namespace AppBundle\Command;

use AppBundle\Entity\Game;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Doctrine\Common\Persistence\ManagerRegistry as Doctrine;

class UpdateDBGameCommand extends Command
{
	private $doctrine;

	public function __construct(Doctrine $doctrine)
	{
		$this->doctrine = $doctrine;

		parent::__construct();
	}

    protected function configure()
    {
        $this
        ->setName('app:UpdateDBGame')

        ->setDescription('Initialize or update the database "Game".')

        ->setHelp('This command allows you to create a user...')
    	;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $curl = curl_init();

		curl_setopt_array($curl, array(
			CURLOPT_URL => "https://swapi.co/api/films/",
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_ENCODING => "",
			CURLOPT_MAXREDIRS => 10,
			CURLOPT_TIMEOUT => 30,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			CURLOPT_CUSTOMREQUEST => "GET",
			CURLOPT_HTTPHEADER => array(
			    "Cache-Control: no-cache",
			    "Postman-Token: 3422192d-b67c-445b-bc9c-c91038bad209"
			),
		));

		$response = curl_exec($curl);
		$err = curl_error($curl);

		curl_close($curl);

		if ($err) 
		{
		  	$output->write('cURL Error #:' . $err);
		} 
		else 
		{
			$data = json_decode($response, true);

			$em = $this->doctrine->getManager();
			foreach($data['results'] as $value)
			{
				$game = new Game();
                $game->setTitle($value['title']);
                $game->setSlug($value['title']);
                $em->persist($game);
				$em->flush();
				$output->writeln('Traitement de : '.$value['title']);
			}
		}
    }
    
	private function getDBData()
	{
			$data = $this->doctrine->getRepository(Game::class)->findAll();

			return $data;
				
	}
}


