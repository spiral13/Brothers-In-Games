<?php

namespace AppBundle\DataFixtures\Fakers;

class GenreProvider
{
	public function genre()
	{
		$array = [
			'Homme',
			'Femme',
			'Robot',
			'Chameau',
			'Truc',
		];

		return $array[mt_rand(0, count($array)-1)];
	}
}