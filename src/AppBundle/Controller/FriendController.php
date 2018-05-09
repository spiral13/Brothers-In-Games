<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class FriendController extends Controller
{
	public function addFriendAction(Request $request)
	{
		$currentUser = $this->getUser();

		if($request->request->all())
		{
			$name = $request->request->get('name');
			$user = $this->getDoctrine()->getRepository(User::class)->findOneBy(['name' => $name]);
			if(!$user)
			{
				return $this->json(['status' => false, 'message' => 'Utilisateur inconnu dans la base de donnée']);
			}

			foreach($currentUser->getMyFriend() as $friend)
			{
				if($user == $friend)
				{
					return $this->json(['status' => false, 'message' => 'Cette utilisateur est déjà dans la liste d\'amis']);
				}
			}

			$em = $this->getDoctrine()->getManager();
			$currentUser->addMyFriend($user);
			$em->persist($currentUser);
			$em->flush();

			$user = $this->getDoctrine()->getRepository(User::class)->findOneInArray($id);

			return $this->json(['status' => true, 'user' => $user]);
		}
		else
		{
			return $this->json(['status' => false]);
		}
	}

	public function removeFriendAction(Request $request)
	{
		$currentUser = $this->getUser();

		if($request->request->all())
		{
			$id = $request->request->get('id');
			if(preg_match("/\d/", $id))
			{
				$user = $this->getDoctrine()->getRepository(User::class)->findOneBy(['id' => $id]);
			}
			else
			{
				return $this->json(['status' => false, 'message' => 'Utilisateur inconnu dans la base de donnée']);
			}

			$em = $this->getDoctrine()->getManager();

			foreach($currentUser->getMyFriend() as $friend)
			{
				if($user == $friend)
				{
                    $currentUser->getMyFriend()->removeElement($user);
					$user->getMyFriend()->removeElement($currentUser);
					$em->persist($currentUser);
					$em->flush();

                    return $this->json(['status' => true]);
				}
			}
			return $this->json(['status' => false, 'message' => 'Cette utilisateur n\'est pas dans la liste d\'amis']);
		}
		else
		{
			return $this->json(['status' => false]);
		}
	}

	public function getUserFriendsAction()
	{
		$userId = $this->getUser()->getId();

		$friends = $this->getDoctrine()->getRepository(User::class)->findFriendByCurrentUserIdInArray($userId);

		return $this->json($friends);
	}
}