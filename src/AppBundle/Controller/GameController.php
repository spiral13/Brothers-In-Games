<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Game;
use JMS\Serializer\SerializerBuilder;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class GameController extends Controller
{
	/**
	 * Calling concerned template
	 */
	public function listAction()
	{
		return $this->render('game/list.html.twig');
	}

	/**
	 * Calling concerned template
	 */
	public function listByUserAction()
	{
		return $this->render('game/user_games_list.html.twig');
	}

	/**
	 * Get instance of game with the ID send by post
	 * Add game to the associated user table
	 * set response in array
	 * serialize to json
	 * send it to Actios 
	 * 
	 * @return JSON
	 */
	public function addUserGameAction(Request $request)
	{
		$user = $this->getUser();

		if($request->request->all())
		{
			$id = $request->request->get('id');
			if(preg_match("/\d/", $id))
			{
				$game = $this->getDoctrine()->getRepository(Game::class)->findOneBy(['id' => $id]);
			}
			else
			{
				return $this->json(['status' => false, 'message' => 'Jeux inconnu dans la base de donnée']);
			}

			foreach($game->getUsers() as $userGame)
			{
				if($user == $userGame)
				{
					return $this->json(['status' => false, 'message' => 'Ce jeux est déjà dans la liste']);
				}
			}

			$em = $this->getDoctrine()->getManager();
			$game->addUsers($user);
			$em->persist($game);
			$em->flush();

			$game = $this->getDoctrine()->getRepository(Game::class)->findOneInArray($id);

			return $this->json(['status' => true, 'game' => $game]);
		}
		else
		{
			return $this->json(['status' => false]);
		}
	}

	/**
	 * Get instance of game with the ID send by post
	 * remove game to the associated user table
	 * set response in array
	 * serialize to json
	 * send it to Actios 
	 * 
	 * @return JSON
	 */
	public function removeUserGameAction(Request $request)
	{
		$user = $this->getUser();

		if($request->request->all())
		{
			$id = $request->request->get('id');
			if(preg_match("/\d/", $id))
			{
				$game = $this->getDoctrine()->getRepository(Game::class)->findOneBy(['id' => $id]);
				
			}
			else
			{
				return $this->json(['status' => false, 'message' => 'Jeux inconnu dans la base de donnée']);
			}

			$em = $this->getDoctrine()->getManager();
			
			foreach($game->getUsers() as $userGame)
			{
				if($user === $userGame)
				{

					$game->getUsers()->removeElement($user);
					$user->getGames()->removeElement($game);
					$em->flush();

					return $this->json(['status' => true]);
				}
			}
			return $this->json(['status' => false, 'message' => 'Ce jeux n\'est pas dans la liste']);
		}
		else
		{
			return $this->json(['status' => false]);
		}
	}

	/**
	 * Find All Games
	 * set result in array
	 * serialize to json
	 * send it to Actios 
	 * 
	 * @return JSON
	 */
	public function getAllGamesAction()
	{
		$games = $this->getDoctrine()->getRepository(Game::class)->findAllInArray();

		$serializer = SerializerBuilder::create()->build();
		$json = $serializer->serialize($games, 'json');

		return new Response($json);
	}

	/**
	 * Find games By User currently connected
	 * set result in array
	 * serialize to json
	 * send it to Actios 
	 * 
	 * @return JSON
	 */
	public function getUserGameAction()
	{
		$games = $this->getDoctrine()->getRepository(Game::class)->findAllInArrayByUser($this->getUser());

		return $this->json($games);
	}

}