<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Announcement;
use JMS\Serializer\SerializerBuilder;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class AnnouncementController extends Controller
{
	public function listAction()
	{
		return $this->render('announcement/list.html.twig');
	}

	public function getAnnouncementByGameSlugAction(Request $request)
	{
		$slug = $request->request->get('slug');
		$games = $this->getDoctrine()->getRepository(Announcement::class)->findInArrayBySlug($slug);

		$serializer = SerializerBuilder::create()->build();
		$json = $serializer->serialize($games, 'json');

		return new Response($json);
	}
}