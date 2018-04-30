<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Announcement;
use AppBundle\Entity\Game;
use JMS\Serializer\SerializerBuilder;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class AnnouncementController extends Controller
{
	public function listAction()
	{
		return $this->render('announcement/list.html.twig');
	}

	public function readAction()
	{
		return $this->render('announcement/read.html.twig');
	}


	public function createAction(Request $request)
	{
		if(!empty($request->request->all()))
		{
			$gameId = $request->request->get('game-id');
			$content = $request->request->get('content');
			$published = $date = new \DateTime();
			$user = $this->getUser();
			$game = $this->getDoctrine()->getRepository(Game::class)->findOneBy(['id' => $gameId]);

			if(!$game)
			{
				return $this->json(['status' => false, 'message' => 'Le jeux n\'existe pas']);
			}

			$announcement = new Announcement();

			$announcement->setGame($game);
			$announcement->setUser($user);
			$announcement->setContent($content);
			$announcement->setPublished($published);

			$validator = $this->get('validator');
			$errors = $validator->validate($announcement);

			if(count($errors) > 0)
			{
				$arrayErrors = array();

            	foreach ($errors as $key => $error) {
	                $arrayErrors[$error->getPropertyPath()] = $error->getMessage();
	            }

	            return $this->json(array('status' => false, 'message' => 'Certaines données ne sont pas valide', 'errors' => $arrayErrors));
			}
			else
			{
				$em = $this->getDoctrine()->getManager();
				$em->persist($announcement);
				$em->flush();

				return $this->json(array('status' => true, 'message' => 'Annonce ajouté avec succès'));
			}
		}
		else
        {
            return $this->json(array('status' => false, 'message' => 'Champ vide ou inexistant'));
        }
	}

	/**
	 * Find all announcements
	 * set result in array
	 * serialize to json
	 * send it to Actios 
	 * 
	 * @return JSON
	 */
	public function getAllAnnouncementsAction()
	{
		$announcement = $this->getDoctrine()->getRepository(Announcement::class)->findAllInArray();

		$serializer = SerializerBuilder::create()->build();
		$json = $serializer->serialize($announcement, 'json');

		return new Response($json);
	}

	/**
	 * find all announcements for game
	 * set result in array
	 * serialize to json
	 * send it to Actios 
	 * 
	 * @return JSON
	 */
	public function getAnnouncementByGameSlugAction(Request $request)
	{
		$slug = $request->request->get('slug');
		$announcement = $this->getDoctrine()->getRepository(Announcement::class)->findInArrayBySlug($slug);

		$serializer = SerializerBuilder::create()->build();
		$json = $serializer->serialize($announcement, 'json');

		return new Response($json);
	}

	/**
	 * Find one announcement by his id 
	 * set result in array
	 * serialize to json
	 * send it to Actios 
	 * 
	 * @return JSON
	 */
	public function getAnnouncementAction(Request $request)
	{
		$id = $request->request->get('id');
		$announcement = $this->getDoctrine()->getRepository(Announcement::class)->findOneInArray($id);

		$serializer = SerializerBuilder::create()->build();
		$json = $serializer->serialize($announcement, 'json');

		return new Response($json);
	}

}