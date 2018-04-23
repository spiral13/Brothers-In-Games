<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HomeController extends Controller
{
    public function homeVisitorAction()
    {
        return $this->render('default/index.html.twig');
    }
}
