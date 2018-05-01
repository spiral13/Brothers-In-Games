<?php 

namespace AppBundle\Controller;

use AppBundle\Entity\Article;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ArticleController extends Controller
{
	public function readAction()
	{
		return $this->render('article/read.html.twig');
	}

	/**
	 * Find all articles between first & limit
	 * set result in array
	 * serialize to json
	 * send it to Actios 
	 * 
	 * @return JSON
	 */
	public function getHomeArticleAction()
	{
		$news = $this->getDoctrine()->getRepository(Article::class)->findSoMuchFormTheLast(0, 9);

		return $this->json($news);
	}

	/**
	 * Find all articles between another first & limit
	 * set result in array
	 * serialize to json
	 * send it to Actios 
	 * 
	 * @return JSON
	 */
	public function getHomeArticleSidebarAction()
	{
		$news = $this->getDoctrine()->getRepository(Article::class)->findSoMuchFormTheLast(10, 9);

		return $this->json($news);
	}

	/**
	 * Find article By Id
	 * set result in array
	 * serialize to json
	 * send it to Actios 
	 * 
	 * @return JSON
	 */
	public function getArticleAction(Request $request)
	{
		$slug = $request->Request->get('id');
		$news = $this->getDoctrine()->getRepository(Article::class)->findOneByInArray($id);

		return $this->json($news);
	}
}