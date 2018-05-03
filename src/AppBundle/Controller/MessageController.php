<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Message;
use AppBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class MessageController extends Controller
{
	public function getListSendedMessagesAction()
	{
		$messages = $this->getDoctrine()->getRepository(Message::class)->findAllByAuthorInArray($this->getUser());

		return $this->json($messages);
	}

	public function getListreceivedMessagesAction(Request $request)
	{
		$messages = $this->getDoctrine()->getRepository(Message::class)->findAllByReceiverInArray($this->getUser());

		return $this->json($messages);
	}

	public function getMessageAction(Request $request)
	{
		$user = $this->getUser();
		if($request->query->all())
		{
			$id = $request->query->get('id');
			$message = $this->getDoctrine()->getRepository(Message::class)->findOneBy(['id' => $id]);

			if($message->getAuthor() == $user || $message->getReceiver() == $user)
			{
				$message = $this->getDoctrine()->getRepository(Message::class)->findOneByInArray($id);

				return $this->json($message);
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
		if($request->query->all())
		{
			$receiverId = $request->query->get('receiver-id');
			$content = $request->query->get('content');
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
		if(!empty($request->query->all()))
		{
			$messageId = $request->query->get('id');
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