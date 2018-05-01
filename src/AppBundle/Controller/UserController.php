<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Profile;
use AppBundle\Entity\Role;
use AppBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class UserController extends Controller
{
	public function loginAction(AuthenticationUtils $authenticationUtils){}

	public function createAction(UserPasswordEncoderInterface $encoder, Request $request)
    {

        $role = $this->getDoctrine()->getRepository(Role::class)->findOneBy(['code' => 'ROLE_USER']);

		if(!empty($request->request->all()))
		{

            $username = trim($request->request->get('username'));
            $mail = trim($request->request->get('email'));
            $plainPassword = trim($request->request->get('newPassword'));

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
                    foreach ($errors as $key => $error)
                    {
                        $arrayErrors[$error->getPropertyPath()] = $error->getMessage();
                    }
                    return $this->json(array('status' => false, 'errors' => $arrayErrors));
                }
                else
                {
                    $em = $this->getDoctrine()->getManager();
                    $em->persist($user);
                    $em->flush();

                    $this->createAssociatedProfile($user);

                    return $this->json(array('status' => true));
                }

            }
            elseif($alreadyName)
            {
                $message = 'Nom d\'utilisateur déjà pris';
                return $this->json(array('status' => false, 'message' => $message));
            }
            elseif ($alreadyMail)
            {
                $message = 'Mail déjà utilisé';
                return $this->json(array('status' => false, 'message' => $message));
            }
            else
            {
                $message = 'Une erreur est survenue';
                return $this->json(array('status' => false, 'message' => $message));
            }
		}
        else
        {
            return $this->json(array('status' => false));
        }
	}

    public function readAction()
    {
        return $this->render('user/account.html.twig');
    }

    public function updateAction(UserPasswordEncoderInterface $encoder, Request $request)
    {     
        $user = $this->getUser();

        if($request->request->all())
        {
            $getUsername = trim(strip_tags($request->request->get('username')));
            $getMail = trim(strip_tags($request->request->get('mail')));
            $getPassword = trim(strip_tags($request->request->get('password')));

            $alreadyName = $this->getDoctrine()->getRepository(User::class)->findOneBy(['username' => $getUsername]);
            $alreadyMail = $this->getDoctrine()->getRepository(User::class)->findOneBy(['mail' => $getMail]);

            if(!$alreadyMail && !$alreadyName)
            {
                $username = (empty($getUsername)) ? $user->getUsername() :  $getUsername;
                $mail = (empty($getMail)) ? $user->getMail() :  $getMail;
                $password = (empty($getPassword)) ? $user->getPassword() :  $encoder->encodePassword($user, $getPassword);

                $user->setUsername($username);
                $user->setMail($mail);
                $user->setPassword($password);

                $validator = $this->get('validator');
                $errors = $validator->validate($user);

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
                    $em->persist($user);
                    $em->flush();

                    $id = $this->getUser()->getId();
                    $user = $this->getDoctrine()->getRepository(User::class)->findOneInArray($id);

                    return $this->json(array('status' => true, 'data' => $user));
                }
            }
            elseif($alreadyName)
            {
                $message = 'Nom d\'utilisateur déjà pris';
                return $this->json(array('status' => false, 'message' => $message));
            }
            elseif ($alreadyMail)
            {
                $message = 'Mail déjà utilisé';
                return $this->json(array('status' => false, 'message' => $message));
            }
            else
            {
                $message = 'Une erreur est survenue';
                return $this->json(array('status' => false, 'message' => $message));
            }
        }
        else
        {
            return $this->json(array('valid' => false));
        }
    }

    public function createAssociatedProfile($user)
    {
        $em = $this->getDoctrine()->getManager();
        $profile = new Profile();
        $em->persist($profile);
        $em->flush();

        $user->setProfile($profile);
        $em->persist($user);
        $em->flush();
    }

    public function getUserAction()
    {
        $id = $this->getUser()->getId();
        $user = $this->getDoctrine()->getRepository(User::class)->findOneInArray($id);

        return $this->json($user);
    }
}