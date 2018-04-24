<?php

namespace AppBundle\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use AppBundle\Entity\Role;
use AppBundle\Entity\User;

class AppFixtures extends Fixture
{
    private $encoder;
    
    public function __construct(UserPasswordEncoderInterface $encode) {
        $this->encoder = $encode;
    }

    public function load(ObjectManager $manager)
    {
        $this->addRoles($manager, 'ROLE_USER', 'Utilisateur');
        $this->addRoles($manager, 'ROLE_MODERATOR', 'Modérateur');
        $this->addRoles($manager, 'ROLE_ADMIN', 'Administrateur');

        $roleUser = $manager->getRepository(Role::class)->findOneBy(['code' => 'ROLE_USER']);
        $roleModo = $manager->getRepository(Role::class)->findOneBy(['code' => 'ROLE_MODERATOR']);
        $roleAdmin = $manager->getRepository(Role::class)->findOneBy(['code' => 'ROLE_ADMIN']);
        
        $this->addSimpleUsers($manager, 'admin', 'admin@oclock.com', 'admin', $roleAdmin);
        $this->addSimpleUsers($manager, 'modo', 'modo@oclock.com', 'modo', $roleModo);
        $this->addSimpleUsers($manager, 'user', 'user@oclock.com', 'user', $roleUser);

        $admin = $manager->getRepository(User::class)->findOneBy(['username' => 'admin']);

        $generator = \Faker\Factory::create('fr_FR');
        $populator = new \Faker\ORM\Doctrine\Populator($generator, $manager);

        $populator->addEntity('AppBundle\Entity\User', 10, array(
            'username' => function() use ($generator) { return $generator->userName(); },
            'mail' => function() use ($generator) { return $generator->email(); },
            'password' => function() use ($generator) { return $generator->password(); },
            'isActive' => 1,
            'role' => $roleUser
        ));

        $populator->addEntity('AppBundle\Entity\Article', 20, array(
            'title' => function() use ($generator) { return $generator->sentence($nbWords = 10, $variableNbWords = true); },
            'image' => function() use ($generator) { return $generator->imageUrl($width = 800, $height = 600); },
            'content' => function() use ($generator) { return $generator->paragraph($nbSentences = 3, $variableNbSentences = true); },
            'published' => function() use ($generator) { return $generator->dateTimeAD($max = 'now', $timezone = null); },
            'user' => $admin
        ));

        $populator->addEntity('AppBundle\Entity\Game', 20, array(
            'title' => function() use ($generator) { return $generator->sentence($nbWords = 10, $variableNbWords = true); },
            'cover' => function() use ($generator) { return $generator->imageUrl($width = 200, $height = 250); }
        ));

        $populator->addEntity('AppBundle\Entity\GameCategory', 5, array(
            'title' => function() use ($generator) { return $generator->jobTitle(); },
        ));

        $populator->addEntity('AppBundle\Entity\Announcement', 20, array(
            'content' => function() use ($generator) { return $generator->text($maxNbChars = 255) ; },
            'published' => function() use ($generator) { return $generator->dateTimeAD($max = 'now', $timezone = null); },
        ));
        $inserted = $populator->execute();

        $games = $inserted['AppBundle\Entity\Game'];
        $gameCategories = $inserted['AppBundle\Entity\GameCategory'];

        foreach($games as $game)
        {
            shuffle($gameCategories);
            
            for($i = 0; $i < mt_rand(1, 3); $i++)
            {
                $game->addGamecategories($gameCategories[$i]);
            }
            $manager->persist($game);
        }
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
}