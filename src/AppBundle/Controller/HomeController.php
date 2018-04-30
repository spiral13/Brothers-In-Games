<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Article;
use AppBundle\Entity\Game;
use DoctrineBatchUtils\BatchProcessing\SimpleBatchIteratorAggregate;
use Doctrine\Common\Persistence\ManagerRegistry as Doctrine;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Encoder\XmlEncoder;


class HomeController extends Controller
{
	private $doctrine;

	public function __construct(Doctrine $doctrine)
	{
		$this->doctrine = $doctrine;
	}
    public function homeVisitorAction()
    {
        return $this->render('home/visitor.html.twig');
    }
    public function homeUserAction()
    {
    	return $this->render('home/user.html.twig');
    }
    
    public function testAction(Request $request)
    {
    	$curl = curl_init();

		curl_setopt_array($curl, array(
		  CURLOPT_URL => "https://www.giantbomb.com/api/games/?api_key=5d5a98725d7ca9a21b1518afe5c8138056ec6ecd",
		  CURLOPT_RETURNTRANSFER => true,
		  CURLOPT_ENCODING => "",
		  CURLOPT_MAXREDIRS => 10,
		  CURLOPT_TIMEOUT => 30,
		  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		  CURLOPT_CUSTOMREQUEST => "GET",
		  CURLOPT_HTTPHEADER => array(
		    "Cache-Control: no-cache",
		    "Postman-Token: 9a8c2250-470b-47bb-bd8c-a8e342f4c449"
		  ),
		));
		curl_setopt($curl, CURLOPT_USERAGENT, "Baboulinet Projet titre pro");

		$response = curl_exec($curl);
		$err = curl_error($curl);

		curl_close($curl);

		$encoder = new XmlEncoder();

		$array = $encoder->encode($response, 'xml');

		dump($array);

		$string = $response;
		
		return new Response($string);
		
    }
    private function getDBData()
	{
			$data = $this->doctrine->getRepository(Game::class)->findAllInArray();

			return $data;
				
	}
}
