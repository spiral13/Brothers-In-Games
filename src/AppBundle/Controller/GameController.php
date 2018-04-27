<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Game;
use JMS\Serializer\SerializerBuilder;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class GameController extends Controller
{
	public function listAction()
	{
		return $this->render('game/list.html.twig');
	}

	public function getAllGamesAction()
	{
		$games = $this->getDoctrine()->getRepository(Game::class)->findAllInArray();

		$serializer = SerializerBuilder::create()->build();
		$json = $serializer->serialize($games, 'json');

		return new Response($json);
	}

	public function getApiAction()
	{
		$curl = curl_init();
		curl_setopt_array($curl, array(
		  CURLOPT_URL => "https://api-endpoint.igdb.com/games/?limit=50&offset=1000&fields=name,slug,cover,game_modes",
		  CURLOPT_RETURNTRANSFER => true,
		  CURLOPT_ENCODING => "",
		  CURLOPT_MAXREDIRS => 10,
		  CURLOPT_TIMEOUT => 30,
		  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		  CURLOPT_CUSTOMREQUEST => "GET",
		  CURLOPT_HTTPHEADER => array(
		    "Cache-Control: no-cache",
		    "Postman-Token: 0216c62a-2ac7-4577-95a4-084674147fdb",
		    "user-key: 5194a756bcbf437b105edfc3ded3181d"
		  ),
		));

		$response = curl_exec($curl);
		$err = curl_error($curl);


		curl_close($curl);

		$serializer = SerializerBuilder::create()->build();
		$object = $serializer->deserialize($response, 'GameController\getApiAction', 'json');

		dump($object);

		if ($err) {
		  echo "cURL Error #:" . $err;
		} else {
		  echo $response;
		}
	}
}