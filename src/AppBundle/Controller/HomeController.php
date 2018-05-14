<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Article;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HomeController extends Controller
{
    public function homeVisitorAction()
    {
    	if($this->getUser())
    	{
    		return $this->redirectToRoute('home_user');
    	}
        return $this->render('home/visitor.html.twig');
    }
    public function homeUserAction()
    {
        return $this->render('home/user.html.twig');
    }
    public function contactAction()
    {
        return $this->render('home/contact.html.twig');
    }
    public function cguAction()
    {
        return $this->render('home/cgu.html.twig');
    }
    public function legalMentionAction()
    {
    	return $this->render('home/legal_mention.html.twig');
    }
    
}
