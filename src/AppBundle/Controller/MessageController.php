<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Message;
use AppBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class MessageController extends Controller
{
	public function listSendAction()
	{
		return $this->render('message/list.html.twig');
	}
	public function listReceiveAction()
	{
		return $this->render('message/list.html.twig');
	}
	public function readAction()
	{
		return $this->render('message/read.html.twig');
	}
	public function getListSendMessageAction()
	{
		$messages = $this->getDoctrine()->getRepository(Message::class)->findAllByAuthorInArray($this->getUser());

		foreach($messages as $key => $message)
		{
			unset($message['receiver']['id']);
			unset($message['receiver']['mail']);
			unset($message['receiver']['password']);
			unset($message['receiver']['isActive']);
			$messages[$key] = $message;
		}

		return $this->json($messages);
	}

	public function getListreceivedMessageAction(Request $request)
	{
		$messages = $this->getDoctrine()->getRepository(Message::class)->findAllByReceiverInArray($this->getUser());

		foreach($messages as $key => $message)
		{
			unset($message['author']['id']);
			unset($message['author']['mail']);
			unset($message['author']['password']);
			unset($message['author']['isActive']);
			$messages[$key] = $message;
		}
		
		return $this->json($messages);
	}

	public function getMessageAction(Request $request)
	{
		$user = $this->getUser();
		if($request->request->all())
		{
			$id = $request->request->get('id');
			$message = $this->getDoctrine()->getRepository(Message::class)->findOneBy(['id' => $id]);

			if($message->getAuthor() == $user || $message->getReceiver() == $user)
			{
				$message = $this->getDoctrine()->getRepository(Message::class)->findOneByInArray($id);

				return $this->json(['status' => true, 'message' => $message]);
			}
			else
			{
				return $this->json(['status' => false, 'message' => 'Ce message n\'existe pas ou vous n\'avez pas l\'autorisation']);
			}

		}
		else
		{
			return $this->json(['status' => false]);
		}
	}

	public function createAction(Request $request)
	{
		if($request->request->all())
		{
			$receiverId = $request->request->get('id');
			$content = $request->request->get('content');
			$published = new \Datetime();

			$receiver = $this->getDoctrine()->getRepository(User::class)->findOneBy(['id' => $receiverId]);

			$message = new Message();
			$message->setAuthor($this->getUser());
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

				$message = $this->getDoctrine()->getRepository(Message::class)->findOneByInArray($message->getId());

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

	public function deleteAction(Request $request)
	{
		if(!empty($request->request->all()))
		{
			$messageId = $request->request->get('id');
			$user = $this->getUser();
			$message = $this->getDoctrine()->getRepository(Message::class)->findOneBy(['id' => $messageId]);

			if($message && $message->getReceiver() === $user)
			{
				$em = $this->getDoctrine()->getManager();
				$em->remove($message);
				$em->flush();

				return $this->json(array('status' => true, 'message' => 'message supprimé avec succès'));
			}
			else
	        {
	            return $this->json(array('status' => false, 'message' => 'Le message n\'exite pas ou vous n\'êtes pas le propriétaire'));
	        }
		}
		else
        {
            return $this->json(array('status' => false));
        }
    }
}