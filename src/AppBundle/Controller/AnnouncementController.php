<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AnnouncementController extends Controller
{
	public function listAction()
	{
		return $this->render('announcement/list.html.twig');
	}
}