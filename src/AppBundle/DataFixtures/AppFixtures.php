<?php
namespace AppBundle\DataFixtures;
use AppBundle\DataFixtures\Fakers\GamesProvider;
use AppBundle\Entity\Announcement;
use AppBundle\Entity\Profile;
use AppBundle\Entity\Role;
use AppBundle\Entity\User;
use AppBundle\Service\NormalizeValue;
use AppBundle\Service\SlugConverter;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ManagerRegistry as Doctrine;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    private $encoder;
    private $slug;
    private $normalize;
    private $doctrine;
    
    public function __construct(UserPasswordEncoderInterface $encode, SlugConverter $slug, NormalizeValue $normalize, Doctrine $doctrine) {
        $this->encoder = $encode;
        $this->slug = $slug;
        $this->normalize = $normalize;
        $this->doctrine = $doctrine;
    }
    public function load(ObjectManager $manager)
    {
        $this->addRoles($manager, 'ROLE_USER', 'Utilisateur');
        $this->addRoles($manager, 'ROLE_ADMIN', 'Administrateur');
        $roleUser = $manager->getRepository(Role::class)->findOneBy(['code' => 'ROLE_USER']);
        $roleAdmin = $manager->getRepository(Role::class)->findOneBy(['code' => 'ROLE_ADMIN']);
        
        $this->addSimpleUsers($manager, 'admin', 'admin@oclock.com', 'admin', $roleAdmin);
        $this->addSimpleUsers($manager, 'user', 'user@oclock.com', 'user', $roleUser);
        $devUser = $manager->getRepository(User::class)->findOneBy(['username' => 'user']);
        $admin = $manager->getRepository(User::class)->findOneBy(['username' => 'admin']);

        $generator = \Faker\Factory::create('fr_FR');
        $generator->addProvider(new GamesProvider);

        $populator = new \Faker\ORM\Doctrine\Populator($generator, $manager);
        $populator->addEntity('AppBundle\Entity\Profile', 10, array(
            'firstname' => function() use ($generator) { return $generator->firstName(); },
            'image' => function() use ($generator) { return $generator->imageUrl(); },
            'birthdate' => function() use ($generator) { return $generator->dateTimeBetween($startDate = '-80 years', $endDate = '-10 years', $timezone = null); },
            'gender' => function() use ($generator) { return $generator->title(); },
            'description' => function() use ($generator) { return $generator->text($maxNbChars = 200); }
        ));
        $populator->addEntity('AppBundle\Entity\User', 10, array(
            'username' => function() use ($generator) { return $generator->userName(); },
            'mail' => function() use ($generator) { return $generator->email(); },
            'password' => function() use ($generator) { return $generator->password(); },
            'isActive' => 1,
            'role' => $roleUser
        ));
        $populator->addEntity('AppBundle\Entity\Article', 20, array(
            'title' => function() use ($generator) { return $generator->unique()->reviewTitle(); },
            'image' => function() use ($generator) { return $generator->reviewImage(); },
            'content' => function() use ($generator) { return $generator->text($maxNbChars = 2000); },
            'published' => function() use ($generator) { return $generator->dateTimeAD($max = 'now', $timezone = null); },
            'user' => $admin
        ), array(
            function($article) { 
                $title = $this->normalize->deemphasizeString($article->getTitle());
                $article->setSlug($this->slug->toSlug($title));
                }
        ));
        $populator->addEntity('AppBundle\Entity\Game', 20, array(
            'title' => function() use ($generator) { return $generator->unique()->gameTitle(); },
            'cover' => function() use ($generator) { return $generator->unique()->gameCover(); }
        ), array(
            function($game) { 
                $title = $this->normalize->deemphasizeString($game->getTitle());
                $game->setSlug($this->slug->toSlug($title));
                }
        ));
        $populator->addEntity('AppBundle\Entity\GameCategory', 5, array(
            'title' => function() use ($generator) { return $generator->unique()->categoryTitle(); },
        ), array(
            function($category) { 
                $title = $this->normalize->deemphasizeString($category->getTitle());
                $category->setSlug($this->slug->toSlug($title));
                }
        ));
        $populator->addEntity('AppBundle\Entity\Announcement', 20, array(
            'content' => function() use ($generator) { return $generator->text($maxNbChars = 255) ; },
            'published' => function() use ($generator) { return $generator->dateTimeAD($max = 'now', $timezone = null); },
        ));
        $inserted = $populator->execute();

        $games = $inserted['AppBundle\Entity\Game'];
        $gameCategories = $inserted['AppBundle\Entity\GameCategory'];
        $users = $inserted['AppBundle\Entity\User'];
        
        $this->addCategories($manager, $games, $gameCategories, $users);
        $this->addFriends($manager, $users);
        
        $this->fillDevUser($manager, $games, $devUser, $users);
        $this->addAnnouncementForDevUser($manager, $generator, $devUser, $games);
        $this->addProfileForDevUser($manager, $generator, $devUser);
        
        $this->fillDevUser($manager, $games, $admin, $users);
        $this->addAnnouncementForDevUser($manager, $generator, $admin, $games);
        $this->addProfileForDevUser($manager, $generator, $admin);
    }

    private function addProfileForDevUser($manager, $generator, $devUser)
    {
        $profile = new Profile();
        $profile->setFirstname($generator->firstName());
        $profile->setImage($generator->imageUrl());
        $profile->setGender($generator->title());
        $profile->setDescription($generator->text($maxNbChars = 200));
        $profile->setBirthdate($generator->dateTimeBetween($startDate = '-80 years', $endDate = '-10 years', $timezone = null));
        $manager->persist($profile);
        $manager->flush();

        $devUser->setProfile($profile);
        $manager->persist($devUser);
        $manager->flush();
    }

    private function addAnnouncementForDevUser($manager, $generator, $devUser, $games)
    {
        shuffle($games);

        for ($i=0; $i < 10; $i++) {
            $announcement = new Announcement();
            $announcement->setGame($games[$i]);
            $announcement->setUser($devUser);
            $announcement->setContent($generator->text($maxNbChars = 255));
            $announcement->setPublished($generator->dateTimeAD($max = 'now', $timezone = null));
            $manager->persist($announcement);
        }
        $manager->flush();
    }

    private function fillDevUser($manager, $games, $devUser, $users)
    {
        shuffle($games);
        shuffle($users);

        for ($i=0; $i < 10; $i++) {
            $devUser->addGames($games[$i]);

            if($devUser !== $users[$i])
            {
                $devUser->addMyFriend($users[$i]);
            }
        }
        $manager->persist($devUser);
        $manager->flush();
    }
    
    private function addRoles($manager, $code, $name)
    {
        $role = new Role();
        $role->setCode($code);
        $role->setTitle($name);
        $manager->persist($role);
        $manager->flush();
    }
    
    private function addSimpleUsers($manager, $username, $mail, $password, $role)
    {
        $user = new User();
        $user->setUsername($username);
        $user->setMail($mail);
        $user->setPassword($this->encoder->encodePassword($user, $password));
        $user->setRole($role);
        $manager->persist($user);
        $manager->flush();
    }

    private function addCategories($manager, $games, $gameCategories, $users)
    {
        foreach($games as $game)
        {
            shuffle($gameCategories);
            shuffle($users);

            for($i = 0; $i < mt_rand(1, 3); $i++)
            {
                $game->addUsers($users[$i]);
                $game->addGamecategories($gameCategories[$i]);
            }
            $manager->persist($game);
        }
        $manager->flush();
    }

    private function addFriends($manager, $users)
    {
        $user1 = $users;
        
        foreach($users as $user)
        {
            shuffle($user1);

            for($i = 0; $i < mt_rand(1, 10); $i++)
            {   
                if($user1[$i] !== $user)
                {
                    $user->addMyFriend($user1[$i]);
                }
            }
            $manager->persist($user);
        }
        $manager->flush();
    }
}