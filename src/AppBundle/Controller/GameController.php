<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Game;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class GameController extends Controller
{
	public function listAction()
	{
		return $this->render('game/list.html.twig');
	}
	public function listByUserAction()
	{
		return $this->render('game/user_games_list.html.twig');
	}

	public function getAllGamesAction()
	{
		$games = $this->getDoctrine()->getRepository(Game::class)->findAllInArray();

		return $this->json($games);
	}

	public function getUserGameAction()
	{
		$games = $this->getDoctrine()->getRepository(Game::class)->findAllInArrayByUser($this->getUser());

		return $this->json($games);
	}

}