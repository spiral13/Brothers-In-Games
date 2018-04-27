<?php

namespace AppBundle\DataFixtures\Fakers;

class GamesProvider
{
	public function gameTitle()
	{
		$data = $this->gamesList();

		$array = [];
		foreach($data as $value)
		{
			if(isset($value['name']))
			{
				$array[] = $value['name']; 
			}
		}

		return $array[mt_rand(0, count($array)-1)];
	}

	public function gameCover()
	{
		$data = $this->gamesList();

		$array = [];
		foreach($data as $key => $value)
		{
			if(isset($value['cover']))
			{
				$array[] = $value['cover']['url'];
			}
		}

		return $array[mt_rand(0, count($array)-1)];
	}

	public function categoryTitle()
	{
		$data = $this->categoryList();

		$array = [];
		foreach($data as $key => $value)
		{
			if(isset($value['name']))
			{
				$array[] = $value['name'];
			}
		}

		return $array[mt_rand(0, count($array)-1)];
	}

	public function reviewTitle()
	{
		$data = $this->reviewList();

		$array = [];
		foreach($data as $key => $value)
		{
			if(isset($value['title']))
			{
				$array[] = $value['title'];
			}
		}

		return $array[mt_rand(0, count($array)-1)];
	}

	public function reviewImage()
	{
		$data = $this->reviewList();

		$array = [];
		foreach($data as $key => $value)
		{
			if(isset($value['image']))
			{
				$array[] = $value['image'];
			}
		}

		return $array[mt_rand(0, count($array)-1)];
	}

	private function gamesList()
	{
		$curl = curl_init();
		curl_setopt_array($curl, array(
		  CURLOPT_URL => "https://api-endpoint.igdb.com/games/?limit=20&offset=1000&fields=name,slug,cover",
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

		curl_close($curl);

		if ($err) {
		  echo "cURL Error #:" . $err;
		  exit;
		}

		$data = json_decode($response, true);

		return $data;
	}

	private function categoryList()
	{
		$curl = curl_init();
		curl_setopt_array($curl, array(
		  CURLOPT_URL => "https://api-endpoint.igdb.com/genres/?limit=20&fields=name,slug",
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

		curl_close($curl);

		if ($err) {
		  echo "cURL Error #:" . $err;
		  exit;
		}

		$data = json_decode($response, true);

		return $data;
	}

	private function reviewList()
	{
		$curl = curl_init();
		curl_setopt_array($curl, array(
		  CURLOPT_URL => "https://api-endpoint.igdb.com/pulses/?limit=20&fields=title,image",
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

		curl_close($curl);

		if ($err) {
		  echo "cURL Error #:" . $err;
		  exit;
		}

		$data = json_decode($response, true);

		return $data;
	}
}