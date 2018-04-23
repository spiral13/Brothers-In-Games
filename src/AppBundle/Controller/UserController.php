<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class UserController extends Controller
{
	public function loginAction(AuthenticationUtils $authenticationUtils)
    {
        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();
        
        $this->addFlash('valid', 'Vous êtes à présent connecté(e)');
        return $this->render('default/login.html.twig', array(
        'last_username' => $lastUsername,
        'error'         => $error,
        ));
    }
	public function createAction(UserPasswordEncoderInterface $encoder, Request $request){
		if(!empty($request->request->get()))
		{
			$user = new User();
			$username = trim($request->request->get('username'));
			$mail = trim($request->request->get('mail'));
			$plainPassword = trim($request->request->get('password'));
			$password = $encoder->encodePassword($user, $plainPassword);

			$user->setUsername($username);
			$user->setMail($mail);
			$user->setPassword($password);

			$validate = $this->get('validator');
            $errors = $validate->validate($user);

            if(count($errors) > 0)
            {

            }
            else
            {
            	$em = $this->getDoctrine()->getManager();
            	$em->persist($user);
            	$em->flush();
            }
		}

	}
}