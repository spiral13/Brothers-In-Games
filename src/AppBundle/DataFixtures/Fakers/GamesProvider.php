<?php

namespace AppBundle\DataFixtures\Fakers;

class GamesProvider
{
	public function GamesTitle()
	{
		$curl = curl_init();
		curl_setopt_array($curl, array(
		  CURLOPT_URL => "https://api-endpoint.igdb.com/games/?limit=50&offset=1000&fields=name,slug,cover,game_modes",
		  CURLOPT_RETURNTRANSFER => true,
		  CURLOPT_ENCODING => "",
		  CURLOPT_MAXREDIRS => 10,
		  CURLOPT_TIMEOUT => 30,
		  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		  CURLOPT_CUSTOMREQUEST => "GET",
		  CURLOPT_HTTPHEADER => array(
		    "Cache-Control: no-cache",
		    "Postman-Token: 0216c62a-2ac7-4577-95a4-084674147fdb",
		    "user-key: 5194a756bcbf437b105edfc3ded3181d"
		  ),
		));

		$response = curl_exec($curl);
		$err = curl_error($curl);

		dump($response);exit;
		curl_close($curl);
		json_decode($response);
		echo $response;
	}
}