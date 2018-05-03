<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Messenger;
use AppBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class MessengerController extends Controller
{
	public function getInstanceAction(Request $request)
	{
		$user = $this->getUser();
		if($request->request->all())
		{
			$id = $request->request->get('id');
			$receiver = $this->getDoctrine()->getRepository(User::class)->findOneBy(['id' => $id]);

			$validFriend = false;
			foreach ($user->getMyFriend() as $friend) {
				if($receiver === $friend)
				{
					$validFriend = true;
				}
			}

			if(!$receiver || $validFriend === false)
			{
				return $this->json(['status' => false, 'message' => 'L\'utilisateur n\'existe pas ou n\'est pas dans votre liste d\'amis']);
			}

			$instances = $this->getDoctrine()->getRepository(Messenger::class)->findAllByInstanceInArray($user, $receiver);

			return $this->json(['status' => true, 'message' => $instances]);
			
		}
		else
		{
			return $this->json(['status' => false]);
		}
	}

	public function createAction(Request $request)
	{
		$user = $this->getUser();
		if($request->request->all())
		{
			$receiverId = $request->request->get('id');
			$content = $request->request->get('content');
			$published = new \Datetime();

			$receiver = $this->getDoctrine()->getRepository(User::class)->findOneBy(['id' => $receiverId]);

			$validFriend = false;
			foreach ($user->getMyFriend() as $friend) {
				if($receiver === $friend)
				{
					$validFriend = true;
				}
			}

			if(!$receiver || $validFriend === false)
			{
				return $this->json(['status' => false, 'message' => 'L\'utilisateur n\'existe pas ou n\'est pas dans votre liste d\'amis']);
			}

			$message = new Messenger();
			$message->setAuthor($user);
			$message->setReceiver($receiver);
			$message->setPublished($published);
			$message->setContent($content);
			

			if($content)
			{
				$validator = $this->get('validator');
				$errors = $validator->validate($message);

				if(count($errors) > 0)
				{
					$arrayErrors = array();

	            	foreach ($errors as $key => $error) {
		                $arrayErrors[$error->getPropertyPath()] = $error->getMessage();
		            }

		            return $this->json(array('status' => false, 'message' => 'Certaines données ne sont pas valide', 'errors' => $arrayErrors));
				}

				$em = $this->getDoctrine()->getManager();
				$em->persist($message);
				$em->flush();

				$message = $this->getDoctrine()->getRepository(Messenger::class)->findOneByInArray($message->getId());

				return $this->json(['status' => true, 'message' => $message]);
			}
			else
			{
				return $this->json(['status' => false, 'message' => 'Contenu Vide']);
			}
		}
		else
		{
			return $this->json(['status' => false]);
		}
	}
}