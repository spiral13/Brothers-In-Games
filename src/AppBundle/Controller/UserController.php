<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Role;
use AppBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class UserController extends Controller
{
	public function loginAction(Request $request, AuthenticationUtils $authenticationUtils)
    {
        dump($request->request->all());exit;
        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();
        
        $this->addFlash('valid', 'Vous êtes à présent connecté(e)');

        return $this->json(array('valid' => true, 'error' => $error));
    }
	public function createAction(UserPasswordEncoderInterface $encoder, Request $request){

        $role = $this->getDoctrine()->getRepository(Role::class)->findOneBy(['code' => 'ROLE_USER']);

		if(!empty($request->request->all()))
		{
            $username = trim($request->request->get('username'));
            $mail = trim($request->request->get('email'));
            $plainPassword = trim($request->request->get('newpassword'));

            $alreadyName = $this->getDoctrine()->getRepository(User::class)->findOneBy(['username' => $username]);
            $alreadyMail = $this->getDoctrine()->getRepository(User::class)->findOneBy(['mail' => $mail]);

            if(!$alreadyMail && !$alreadyName)
            {
                $user = new User();

			    $password = $encoder->encodePassword($user, $plainPassword);
                $user->setUsername($username);
                $user->setMail($mail);
                $user->setPassword($password);
                $user->setRole($role);

                $validator = $this->get('validator');
                $errors = $validator->validate($user);

                if(count($errors) > 0)
                {
                    $arrayErrors = array();
                    foreach ($errors as $key => $error) {
                        $arrayErrors[$error->getPropertyPath()] = $error->getMessage();
                    }
                    return $this->json(array('valid' => false, 'errors' => $arrayErrors));
                }
                else
                {
                    $em = $this->getDoctrine()->getManager();
                    $em->persist($user);
                    $em->flush();
                    return $this->json(array('valid' => true));
                }

            }
            else
            {
                return $this->json(array('valid' => false, 'errors' => $arrayErrors));
            }
		}
	}
}