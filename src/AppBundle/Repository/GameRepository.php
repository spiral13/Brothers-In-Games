<?php

namespace AppBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * GameRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class GameRepository extends EntityRepository
{
	public function findAllInArray()
	{
		$qb = $this->createQueryBuilder('g')
		->getQuery()
		->getArrayResult()
		;

		return $qb;
	}

	public function findOneInArray($id)
	{
		$qb = $this->createQueryBuilder('g')
		->where('g.id = :id')
		->setParameter('id', $id)
		->getQuery()
		->getArrayResult()
		;

		return $qb;
	}

	public function findAllInArrayByUser($user)
	{
		$qb = $this->createQueryBuilder('g')
		->join('g.users', 'u')
		->where('u = :user')
		->setParameter('user', $user)
		->getQuery()
		->getArrayResult()
		;

		return $qb;
	}

	public function findAllGameWithAnnouncementInArray()
	{
		$qb = $this->createQueryBuilder('g')
		->leftJoin('g.announcements', 'a')
		->addSelect('a')
		->addSelect('COUNT(a.id) as announcementcount')
		->orderBy('announcementcount', 'DESC')
		->groupBy('g.id')
		->having('a > 0')
		->getQuery()
		->getArrayResult()
		;

		return $qb;
	}
}
