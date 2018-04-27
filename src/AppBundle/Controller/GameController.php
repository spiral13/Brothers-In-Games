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
}