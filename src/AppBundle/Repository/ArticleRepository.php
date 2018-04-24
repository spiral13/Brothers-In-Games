<?php

namespace AppBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * ArticleRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */

class ArticleRepository extends EntityRepository
{
	public function findSoMuchFormTheLast()
	{
		$qb = $this->createQueryBuilder('a')
		->orderBy('a.published', 'DESC')
		->setMaxResults(9)
		->getQuery()
		->getResult()
		;

		return $qb;
	}

}
