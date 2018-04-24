<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Article;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HomeController extends Controller
{
    public function homeVisitorAction()
    {
        return $this->render('home/visitor.html.twig');
    }
    public function homeUserAction()
    {
    	$news = $this->getDoctrine()->getRepository(Article::class)->findSoMuchFormTheLast();
    	return $this->render('home/user.html.twig');
    }
}
