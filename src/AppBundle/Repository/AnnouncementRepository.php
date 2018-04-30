<?php

namespace AppBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * AnnouncementRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class AnnouncementRepository extends EntityRepository
{
	public function findAllInArray()
	{
		$qb = $this->createQueryBuilder('a')
		->join('a.user', 'u')
		->addSelect('u')
		->join('g.game', 'g')
		->addSelect('g')
		->getQuery()
		->getArrayResult()
		;

		return $qb;
	}

	public function findInArrayBySlug($slug)
	{
		$qb = $this->createQueryBuilder('a')
		->join('a.game', 'g')
		->where('g.slug = :slug')
		->setParameter('slug', $slug)
		->getQuery()
		->getArrayResult()
		;

		return $qb;
	}

	public function findOneInArray($id)
	{
		$qb = $this->createQueryBuilder('a')
		->where('a.id = :id')
		->setParameter('id', $id)
		->getQuery()
		->getArrayResult()
		;

		return $qb;
	}
}
