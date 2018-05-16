<?php

namespace AppBundle\DataFixtures\Fakers;

class AvatarProvider
{
	public function avatar()
	{
		$array = [
			'http://www.hexatar.com/gallery/thumb/180516_105330_m456a9caafc_avatar.png',
			'http://www.hexatar.com/gallery/thumb/180516_102833_ma717bf4e5c_avatar.png',
			'http://www.hexatar.com/gallery/thumb/180516_101348_mc552ebd0c1_avatar.png',
			'http://www.hexatar.com/gallery/thumb/180516_100627_m869026d9c9_avatar.png',
			'http://www.hexatar.com/gallery/thumb/180516_045700_mc9d7ceb875_avatar.png',
			'http://www.hexatar.com/gallery/thumb/180516_045700_mc9d7ceb875_avatar.png',
			'http://www.hexatar.com/gallery/thumb/180516_045008_f4f24714a3a_avatar.png',
			'http://www.hexatar.com/gallery/thumb/180516_044511_m8c02d41b56_avatar.png',
			'http://www.hexatar.com/gallery/thumb/180516_043216_m4fbf5282ec_avatar.png',
			'http://www.hexatar.com/gallery/thumb/180516_041314_fff5648164e_avatar.png',
			'http://www.hexatar.com/gallery/thumb/180516_040612_m42a6c011d3_avatar.png',
			'http://www.hexatar.com/gallery/thumb/180516_032250_me0ead576d8_avatar.png',
			'http://www.hexatar.com/gallery/thumb/180516_031524_faf64457b78_avatar.png',
			'http://www.hexatar.com/gallery/thumb/180516_025349_fa80b34e9c6_avatar.png',
			'http://www.hexatar.com/gallery/thumb/180516_022153_fd133cb496c_avatar.png',
			'http://www.hexatar.com/gallery/thumb/151202_112032_mce66bdac65.png',
			'http://www.hexatar.com/gallery/thumb/151202_114151_m373831181b.png',
			'http://www.hexatar.com/gallery/thumb/151203_120319_fe149d08043.png',
			'http://www.hexatar.com/gallery/thumb/151104_f6cf45b4f0e.png',
			'http://www.hexatar.com/gallery/thumb/151112_m4b5537c46b.png',
			'http://www.hexatar.com/gallery/thumb/151203_090725_f23f9e855a0.png',
			'http://www.hexatar.com/gallery/thumb/160419_092630_md9c8c671c7_avatar.png',
			'http://www.hexatar.com/gallery/thumb/160426_113912_mabd551a71f_avatar.png',
			'http://www.hexatar.com/gallery/thumb/20151018_m5622883b4f7de.png',
			'http://www.hexatar.com/gallery/thumb/160318_061405_m5e48ca2281_avatar.png',
			'http://www.hexatar.com/gallery/thumb/151204_093606_m873203ba88.png',
			'http://www.hexatar.com/gallery/thumb/20151024_f562b802536bf6.png',
			'http://www.hexatar.com/gallery/thumb/151204_054127_mf5679fe5d8.png',
			'http://www.hexatar.com/gallery/thumb/151203_015308_mca6a02a9c0.png',
			'http://www.hexatar.com/gallery/thumb/151204_034603_m0d563fcacb.png',
			'http://www.hexatar.com/gallery/thumb/151203_015707_fd15769b156.png',
			'http://www.hexatar.com/gallery/thumb/151202_082453_m9301bb204f.png',
			'http://www.hexatar.com/gallery/thumb/20151019_m5624d8e5c14a4.png',
			'http://www.hexatar.com/gallery/thumb/151203_121631_f1d077031c7.png',
			'http://www.hexatar.com/gallery/thumb/151203_101506_m931c2fbc72.png',
			'http://www.hexatar.com/gallery/thumb/151203_052350_mf72faa2b6e.png',
			'http://www.hexatar.com/gallery/thumb/151202_112944_f989630e9e1.png',
			'http://www.hexatar.com/gallery/thumb/20151029_m5631ae9e1c004.png',
			'http://www.hexatar.com/gallery/thumb/151124_112525_m9da23d250b.png',
			'http://www.hexatar.com/gallery/thumb/160403_112959_f2a29f92690_avatar.png',
			'http://www.hexatar.com/gallery/thumb/151203_122110_mdeaefbf5db.png',
		];

		return $array[mt_rand(0, count($array)-1)];
	}
}