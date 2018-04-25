<?php 

namespace AppBundle\Controller;

use AppBundle\Entity\Article;
use JMS\Serializer\SerializerBuilder;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class ArticleController extends Controller
{
	public function getHomeArticleAction()
	{
		$news = $this->getDoctrine()->getRepository(Article::class)->findSoMuchFormTheLast();

		$serializer = SerializerBuilder::create()->build();
		$jsonContent = $serializer->serialize($news, 'json');

		return new Response($jsonContent);
	}
}