<?php

namespace AppBundle\Controller;

class GameController
{
	public function listAction()
	{
		return $this->render('game/list.html.twig');
	}
}