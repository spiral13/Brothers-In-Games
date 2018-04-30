<?php

namespace AppBundle\DataFixtures\Fakers;

class GamesProvider
{
	public function gameTitle()
	{
		$array = [
			'Star Wars : Battlefront II',
			'Battlefield 3',
			'GoldenEye 007',
			'Dragon Ball FighterZ',
			'Star Wars : Battlefront II ',
			'Battlefield 4',
			'Crash Team Racing',
			'Super Smash Bros. Melee',
			'Mario Kart 64',
			'Super Mario Kart',
			'Mario Party',
			'Counter-Strike',
			'The Legend of Zelda: Four Swords Adventures',
			'Mario Kart : Double Dash !!',
			'Perfect Dark',
			'Mario Kart Wii',
			'Left 4 Dead 2',
			'Splinter Cell : Conviction',
			'Minecraft',
			'Call of Duty : Modern Warfare 2',
			'Halo 3',
			'Call of Duty : Black Ops',
			'Super Smash Bros. Brawl',
			'Monaco',
			'Rocket League',
			'Phantasy Star Online Episode I & II',
			'Star Wars : Battlefront',
			'Resident Evil 5',
			'Mario Kart DS',
			'Mario Party 5',
			'Monster Hunter 4 Ultimate',
			'Mario Kart 8',
			'Call of Duty 4 : Modern Warfare',
			'Broforce',
			'Star Wars : Battlefront',
			'Halo : Reach',
			'Call of Duty : Black Ops II',
			'Empire Earth',
			'Portal 2',
			'TimeSplitters 2',
			'Micro Machines Turbo Tournament 96',
			'Micro Machines V3',
			'Battlefield : Bad Company 2',
			'Final Fantasy Crystal Chronicles',
			'Halo 3 : ODST',
			'Call of Duty : Modern Warfare 3',
			'Civilization IV : Beyond the Sword',
			'Streets of Rage II',
			'Streets of Rage',
			'Rock Band 3',
			'Worms Armageddon',
			'Phantasy Star Online',
		];

		return $array[mt_rand(0, count($array)-1)];
	}

	public function gameCover()
	{
		
		$array = [
			'Star Wars : Battlefront II' => 'https://media.senscritique.com/media/000010565692/source_big/Star_Wars_Battlefront_II.jpg',
			'Battlefield 3' => 
			'https://media.senscritique.com/media/000010092278/source_big/Battlefield_3.jpg',
			'GoldenEye 007' => 
			'https://media.senscritique.com/media/000007120097/source_big/Golden_Eye_007.jpg',
			'Battlefield 4' => 
			'https://media.senscritique.com/media/000010092073/source_big/Battlefield_4.jpg',
			'Crash Team Racing' => 
			'https://media.senscritique.com/media/000017056143/source_big/Crash_Team_Racing.jpg',
			'Super Smash Bros. Melee' => 
			'https://media.senscritique.com/media/000007333712/source_big/Super_Smash_Bros_Melee.png',
			'Mario Kart 64' => 
			'https://media.senscritique.com/media/000007105526/source_big/Mario_Kart_64.png',
			'Super Mario Kart' => 
			'https://media.senscritique.com/media/000017711178/source_big/Super_Mario_Kart.jpg',
			'Mario Party' => 
			'https://media.senscritique.com/media/000006342285/source_big/Mario_Party.jpg',
			'Counter-Strike' => 
			'https://media.senscritique.com/media/000000098881/source_big/Counter_Strike.jpg',
			'The Legend of Zelda: Four Swords Adventures' => 
			'https://media.senscritique.com/media/000016679064/source_big/The_Legend_of_Zelda_Four_Swords_Adventures.jpg',
			'Mario Kart : Double Dash !!' => 
			'https://media.senscritique.com/media/000016414862/source_big/Mario_Kart_Double_Dash.png',
			'Perfect Dark' => 
			'https://media.senscritique.com/media/000016377541/source_big/Perfect_Dark.jpg',
			'Mario Kart Wii' => 
			'https://media.senscritique.com/media/000004251582/source_big/Mario_Kart_Wii.jpg',
			'Left 4 Dead 2' => 
			'https://media.senscritique.com/media/000009701140/source_big/Left_4_Dead_2.png',
			'Splinter Cell : Conviction' => 
			'https://media.senscritique.com/media/000009718473/source_big/Splinter_Cell_Conviction.jpg',
			'Minecraft' => 
			'https://media.senscritique.com/media/000010502754/source_big/Minecraft.png',
			'Call of Duty : Modern Warfare 2' => 
			'https://media.senscritique.com/media/000007333682/source_big/Call_of_Duty_Modern_Warfare_2.png',
			'Halo 3' => 
			'https://media.senscritique.com/media/000007868138/source_big/Halo_3.jpg',
			'Call of Duty : Black Ops' => 
			'https://media.senscritique.com/media/000009740825/source_big/Call_of_Duty_Black_Ops.jpg',
			'Super Smash Bros. Brawl' => 
			'https://media.senscritique.com/media/000007333693/source_big/Super_Smash_Bros_Brawl.jpg',
			'Monaco' => 
			'https://media.senscritique.com/media/000004480527/source_big/Monaco.jpg',
			'Rocket League' => 
			'https://media.senscritique.com/media/000017569915/source_big/Rocket_League.jpg',
			'Phantasy Star Online Episode I & II' => 
			'https://media.senscritique.com/media/000000001768/source_big/Phantasy_Star_Online_Episode_I_II.jpg',
			'Star Wars : Battlefront' => 
			'https://media.senscritique.com/media/000007082539/source_big/Star_Wars_Battlefront.jpg',
			'Resident Evil 5' => 
			'https://media.senscritique.com/media/000010045473/source_big/Resident_Evil_5.jpg',
			'Mario Kart DS' => 
			'https://media.senscritique.com/media/000000065684/source_big/Mario_Kart_DS.jpg',
			'Mario Party 5' => 
			'https://media.senscritique.com/media/000007080652/source_big/Mario_Party_5.jpg',
			'Monster Hunter 4 Ultimate' => 
			'https://media.senscritique.com/media/000008989395/source_big/Monster_Hunter_4_Ultimate.png',
			'Mario Kart 8' => 
			'https://media.senscritique.com/media/000010874746/source_big/Mario_Kart_8.jpg',
			'Call of Duty 4 : Modern Warfare' => 
			'https://media.senscritique.com/media/000007333679/source_big/Call_of_Duty_4_Modern_Warfare.jpg',
			'Broforce' => 
			'https://media.senscritique.com/media/000014344608/source_big/Broforce.jpg',
			'Star Wars : Battlefront' => 
			'https://media.senscritique.com/media/000010070713/source_big/Star_Wars_Battlefront.jpg',
			'Halo : Reach' => 
			'https://media.senscritique.com/media/000000019599/source_big/Halo_Reach.jpg',
			'Call of Duty : Black Ops II' => 
			'https://media.senscritique.com/media/000010073639/source_big/Call_of_Duty_Black_Ops_II.jpg',
			'Empire Earth' => 
			'https://media.senscritique.com/media/000004353804/source_big/Empire_Earth.jpg',
			'Portal 2' => 
			'https://media.senscritique.com/media/000010089205/source_big/Portal_2.png',
			'TimeSplitters 2' => 
			'https://media.senscritique.com/media/000005155096/source_big/Time_Splitters_2.jpg',
			'Micro Machines Turbo Tournament 96' => 
			'https://media.senscritique.com/media/000000101612/source_big/Micro_Machines_Turbo_Tournament_96.jpg',
			'Micro Machines V3' => 
			'https://media.senscritique.com/media/000006918722/source_big/Micro_Machines_V3.jpg',
			'Battlefield : Bad Company 2' => 
			'https://media.senscritique.com/media/000010046015/source_big/Battlefield_Bad_Company_2.jpg',
			'Final Fantasy Crystal Chronicles' => 
			'https://media.senscritique.com/media/000009055286/source_big/Final_Fantasy_Crystal_Chronicles.jpg',
			'Halo 3 : ODST' => 
			'https://media.senscritique.com/media/000009939486/source_big/Halo_3_ODST.jpg',
			'Call of Duty : Modern Warfare 3' => 
			'https://media.senscritique.com/media/000000090681/source_big/Call_of_Duty_Modern_Warfare_3.jpg',
			'Civilization IV : Beyond the Sword' => 
			'https://media.senscritique.com/media/000000131584/source_big/Civilization_IV_Beyond_the_Sword.jpg',
			'Streets of Rage II' => 
			'https://media.senscritique.com/media/000017155572/source_big/Streets_of_Rage_II.jpg',
			'Streets of Rage' => 
			'https://media.senscritique.com/media/000017155557/source_big/Streets_of_Rage.jpg',
			'Rock Band 3' => 
			'https://media.senscritique.com/media/000004411973/source_big/Rock_Band_3.jpg',
			'Worms Armageddon' => 
			'https://media.senscritique.com/media/000000141516/source_big/Worms_Armageddon.png',
			'Phantasy Star Online' => 
			'https://media.senscritique.com/media/000009113071/source_big/Phantasy_Star_Online.jpg',
		];

		return $array[mt_rand(0, count($array)-1)];
	}

	public function categoryTitle()
	{
		$array = [
			'Action',
			'Combat',
			'Beat them all',
			'Plates-formes',
			'Tir',
			'Tir en vue subjective',
			'Shoot them up',
			'Rail Shooter',
			'Tir en vue objective',
			'Aventure',
			'Fiction interactive',
			'Aventure graphique',
			'Simulation de drague',
			'Visual novel',
			'Action-aventure',
			'Infiltration',
			'Survival horror',
			'Jeu de rôle',
			'Jeu de rôle d\'action',
			'Hack\'n\'slash',
			'Rogue-like',
			'Jeu de rôle en ligne massivement multijoueur',
			'Jeu de rôle tactique',
			'Réflexion',
			'Labyrinthe',
			'Puzzle',
			'Simulation',
			'Gestion',
			'God Game',
			'Simulation de véhicule',
			'Stratégie',
			'Stratégie au tour par tour',
			'Stratégie en temps réel',
			'Grande stratégie',
			'4X',
			'Wargame',
			'Autres genres',
			'Sport',
			'Course',
			'Rythme',
			'Jeu de programmation',
		];

		return $array[mt_rand(0, count($array)-1)];
	}

	public function reviewTitle()
	{
		$array = [
			'Pro Evolution Soccer 2019 déjà en fuite',
			'En immersion dans Subnautica, des mois après on plonge à notre tour',
			'Final Fantasy VII Remake, Brave Neptunia, Hellblade... ils font les restes de l\'actualité',
			'Frostpunk se fait déjà une place au chaud et va muscler son contenu',
			'BATTLETECH froisse la tôle (souvent) et les coeurs (parfois)',
			'Through the Darkest of Times, l\'Allemagne nazie vue par deux créateurs de Spec Ops: The Line',
			'Faeland valide sa campagne Kickstarter',
			'Revenu du Grand Nord, God of War est passé sur le grill du plateau',
			'Trailblazers s\'affiche en peinture avant son départ',
			'On a exploré les tombeaux mayas de Shadow of the Tomb Raider',
			'Nintendo et Cygames codéveloppent Dragalia Lost, un action RPG pour mobiles',
			'Playerunknown\'s Battlegrounds retravaille entièrement ses armes à feu',
			'Nintendo flatte la Switch avec les ventes de Kirby Star Allies et Bayonetta 2',
			'Duane & Brando, le duo qui transforme les grands noms du JV en opéra rap',
			'Wild West Online fête sa sortie officielle avec un nouveau trailer',
			'Quake Champions accueille Strogg et le Fusil Plasma dans sa mise à jour d\'avril',
			'Flipping Death, le prochain Zoink Games arrive en août',
			'La division jeu vidéo de Sony bat une nouvelle fois son record',
			'The Surge dépasse le demi-million de ventes, se réjouit Focus',
			'Test Nintendo Labo : carton plein ?',
		];

		return $array[mt_rand(0, count($array)-1)];
	}

	public function reviewImage()
	{
		$array = [
			'https://d3isma7snj3lcx.cloudfront.net/optim/images/gallery/33/337143/pro-evolution-soccer-2019-pc-ps4-xone-1e4252ec__830_470.jpg',
			'http://cdn.ebaumsworld.com/mediaFiles/picture/2261090/82998126.jpg',
			'http://coolvibe.com/wp-content/uploads/2013/12/Video-Game-Art-Arman-Akopian-Thief.jpg',
			'https://static.makeuseof.com/wp-content/uploads/2016/09/game-concept-art-online-670x335.jpg',
			'https://www.ablogofthrones.com/wp-content/uploads/2016/01/game_of_thrones___book_cover_by_jamga-d4qs5b6-750x480.jpg',
			'http://www.hearthstonetopdecks.com/wp-content/uploads/2017/07/knightsofthefrozenthronewallpaper001.jpg',
			'https://img.game.co.uk/merch2017/Franchise/MF/jangames-MF.jpg',
			'https://boiteagames.fr/wp-content/uploads/2017/10/aa.jpg',
			'https://secure.i.telegraph.co.uk/multimedia/archive/02255/dishonoredcover_2255782b.jpg',
			'https://static4.gamespot.com/uploads/original/1197/11970954/2888187-xenobladechroniclesx_007.jpg',
			'https://compass-ssl.xbox.com/assets/cf/7c/cf7cba96-8258-4fd2-afa0-9a8de00d1ee4.jpg?n=Windows-10-Games_Content-Placement-0_COD-Infinite-Warefare_740x417.jpg',
			'http://kb4images.com/images/game-wallpaper/37944294-game-wallpaper.jpg',
		];

		return $array[mt_rand(0, count($array)-1)];
	}
}