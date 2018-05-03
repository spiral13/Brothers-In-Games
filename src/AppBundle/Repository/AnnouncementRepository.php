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
		->leftjoin('a.game', 'g')
		->addSelect('g.slug')
		->addSelect('g.cover')
		->addSelect('g.title')
		->leftJoin('a.user', 'u')
		->addSelect('u.username')
		->leftJoin('u.profile', 'p')
		->addSelect('p.image')
		->getQuery()
		->getArrayResult()
		;

		return $qb;
	}

	public function findInArrayBySlug($slug)
	{
		$qb = $this->createQueryBuilder('a')
		->leftjoin('a.game', 'g')
		->addSelect('g.slug')
		->addSelect('g.cover')
		->addSelect('g.title')
		->leftJoin('a.user', 'u')
		->addSelect('u.username')
		->leftJoin('u.profile', 'p')
		->addSelect('p.image')
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
		->join('a.game', 'g')
		->addSelect('g')
		->join('a.user', 'u')
		->join('u.profile', 'p')
		->addSelect('u')
		->addSelect('p')
		->join('u.games' , 'ug')
		->addSelect('ug')
		->where('a.id = :id')
		->setParameter('id', $id)
		->getQuery()
		->getArrayResult()
		;

		return $qb;
	}
}
