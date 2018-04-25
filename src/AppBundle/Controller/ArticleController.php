<?php 

namespace AppBundle\Controller;

use AppBundle\Entity\Article;

class ArticleController extends Controller
{
	public function getHomeArticleAction()
	{
		$news = $this->getDoctrine()->getRepository(Article::class)->findSoMuchFormTheLast();

		return $this->json(['data' => $news]);
	}
}