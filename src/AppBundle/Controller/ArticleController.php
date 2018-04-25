<?php 

namespace AppBundle\Controller;

use AppBundle\Entity\Article;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Serializer\SerializerInterface;

class ArticleController extends Controller
{
	public function getHomeArticleAction(SerializerInterface $serializer)
	{
		$news = $this->getDoctrine()->getRepository(Article::class)->findSoMuchFormTheLast();

		return $this->json(['data' => $news]);
	}
}