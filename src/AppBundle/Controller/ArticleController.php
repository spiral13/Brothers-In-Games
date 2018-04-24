<?php 

namespace AppBundle\Controller;

use AppBundle\Entity\Article;

class ArticleController
{
	public function getHomeArticleAction()
	{
		$news = $this->getDoctrine()->getRepository(Article::class)->findSoMuchFormTheLast();

		return $this->json(['data' => $news]);
	}
}