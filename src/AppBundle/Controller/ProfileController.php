<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Profile;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ProfileController extends Controller
{
	public function showAction()
	{
		return $this->render('user/profile.html.twig');
	}

	public function getProfileAction()
	{
		$id = $this->getUser()->getProfile()->getId();
		$profile = $this->getDoctrine()->getRepository(Profile::class)->findOneInArray($id);

		return $this->json($profile);
	}
	public function updateAction(Request $request)
	{
		if(!empty($request->request->all()))
		{
			$profile = $this->getUser()->getProfile();

			$getFirstname = trim(strip_tags($request->request->get('firstname')));
			$getImage = trim(strip_tags($request->request->get('image')));
			$getBirthdate = trim(strip_tags($request->request->get('birthdate')));
			$getGender = trim(strip_tags($request->request->get('gender')));
			$getDescription = trim(strip_tags($request->request->get('description')));
			
			$firstname = (empty($getFirstname)) ? null : $getFirstname;
			$image = (empty($getImage)) ? null : $this->setDate($getImage);
			$birthdate = (empty($getBirthdate)) ? null : $getBirthdate;
			$gender = (empty($getGender)) ? null : $getGender;
			$description = (empty($getDescription)) ? null : $getDescription;

			$profile->setFirstname($firstname);
			$profile->setImage($image);
			$profile->setBirthdate($birthdate);
			$profile->setGender($gender);
			$profile->setDescription($description);

			$validator = $this->get('validator');
            $errors = $validator->validate($profile);

            if(count($errors) > 0)
            {
				$arrayErrors = array();
                foreach ($errors as $key => $error)
                {
                    $arrayErrors[$error->getPropertyPath()] = $error->getMessage();
                }
                return $this->json(array('valid' => false, 'errors' => $arrayErrors));
			}
			else
			{
				$em = $this->getDoctrine()->getManager();
				$em->persist($profile);
				$em->flush();
			}

			$id = $this->getUser()->getProfile()->getId();
			$profile = $this->getDoctrine()->getRepository(Profile::class)->findOneInArray($id);

			return $this->json(array('status' => true, 'data' => $profile));
		}
		else
        {
            return $this->json(array('valid' => false));
        }
	}
	public function setDate($birthdate)
	{
		$date = new \DateTime();
		$date->setDate($birthdate['Y'], $birthdate['m'], $birthdate['d']);
		$date->format('Y-m-d');

		return $date;
	}
}