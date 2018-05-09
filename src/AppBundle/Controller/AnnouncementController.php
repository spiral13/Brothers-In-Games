<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Announcement;
use AppBundle\Entity\Game;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class AnnouncementController extends Controller
{
	/**
	 * Calling concerned template
	 */
	public function listAction()
	{
		return $this->render('announcement/list.html.twig');
	}

	public function listUserAction()
	{
		return $this->render('announcement/list.html.twig');
	}
	
	/**
	 * Calling concerned template
	 */
	public function readAction()
	{
		return $this->render('announcement/read.html.twig');
	}

	/**
	 * Find game announcements
	 * create Announcement 
	 * send a response in json
	 * 
	 * @return JSON
	 */
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
	 * Find concerned announcements
	 * update result
	 * send a response in json
	 * 
	 * @return JSON
	 */
	public function updateAction(Request $request)
	{
		if(!empty($request->request->all()))
		{
			$announcementId = $request->request->get('announcement-id');
			$user = $this->getUser();
			$announcement = $this->getDoctrine()->getRepository(Announcement::class)->findOneBy(['id' => $announcementId]);

			if($announcement && $announcement->getUser() === $user)
			{
				$gameId = (empty($request->request->get('game-id'))) ? $announcement->getGame() : $request->request->get('game-id');
				$content = $request->request->get('content');
				$game = $this->getDoctrine()->getRepository(Game::class)->findOneBy(['id' => $gameId]);

				if(!$game)
				{
					return $this->json(['status' => false, 'message' => 'Le jeux n\'existe pas']);
				}

				$announcement->setGame($game);
				$announcement->setContent($content);

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

					$announcement = $this->getDoctrine()->getRepository(Announcement::class)->findOneInArray($announcement->getId());

					return $this->json(array('status' => true, 'message' => 'Annonce modifié avec succès', 'annonce' => $announcement));
				}
			}
			else
	        {
	            return $this->json(array('status' => false, 'message' => 'L\'annonce n\'exite pas ou vous n\'êtes pas le propriétaire'));
	        }
		}
		else
        {
            return $this->json(array('status' => false));
        }
	}

	/**
	 * Find concerned announcements
	 * delete result
	 * send a response in json
	 * 
	 * @return JSON
	 */
	public function deleteAction(Request $request)
	{
		if(!empty($request->request->all()))
		{
			$announcementId = $request->request->get('id');
			$user = $this->getUser();
			$announcement = $this->getDoctrine()->getRepository(Announcement::class)->findOneBy(['id' => $announcementId]);

			if($announcement && $announcement->getUser() === $user)
			{
				$em = $this->getDoctrine()->getManager();
				$em->remove($announcement);
				$em->flush();

				return $this->json(array('status' => true, 'message' => 'Annonce supprimé avec succès'));
			}
			else
	        {
	            return $this->json(array('status' => false, 'message' => 'L\'annonce n\'exite pas ou vous n\'êtes pas le propriétaire'));
	        }
		}
		else
        {
            return $this->json(array('status' => false));
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

		return $this->json($announcement);
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

		return $this->json($announcement);
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
		unset($announcement[0]['user']['password']);

		$now = new \datetime('now');
		$birthdate = $announcement[0]['user']['profile']['birthdate'];
		$diff = $now->format('Y') - $birthdate->format('Y');
		
		if($now->format('m') < $birthdate->format('m') && $now->format('d') < $birthdate->format('d'))
		{
			$diff += 1;
		}
		$announcement[0]['user']['profile']['birthdate'] = $diff;

		return $this->json($announcement);
	}

	public function getUserAnnouncementAction(Request $request)
	{
		$user = $this->getUser();

		$announcements = $this->getDoctrine()->getRepository(Announcement::class)->findAllByUserInArray($user);

		return $this->json($announcements);
	}

}