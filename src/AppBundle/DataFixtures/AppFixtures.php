<?php
namespace AppBundle\DataFixtures;
use AppBundle\DataFixtures\Fakers\GamesProvider;
use AppBundle\Entity\Profile;
use AppBundle\Entity\Role;
use AppBundle\Entity\User;
use AppBundle\Service\NormalizeValue;
use AppBundle\Service\SlugConverter;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Doctrine\Common\Persistence\ManagerRegistry as Doctrine;

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
        $generator->addProvider(new GamesProvider);

        $populator = new \Faker\ORM\Doctrine\Populator($generator, $manager);
        $populator->addEntity('AppBundle\Entity\User', 10, array(
            'username' => function() use ($generator) { return $generator->userName(); },
            'mail' => function() use ($generator) { return $generator->email(); },
            'password' => function() use ($generator) { return $generator->password(); },
            'isActive' => 1,
            'role' => $roleUser
        ));
        $populator->addEntity('AppBundle\Entity\Profile', 10, array(
            'firstname' => function() use ($generator) { return $generator->firstName(); },
            'image' => function() use ($generator) { return $generator->imageUrl(); },
            'age' => function() use ($generator) { return $generator->numberBetween($min = 18, $max = 99); },
            'gender' => function() use ($generator) { return $generator->title(); },
            'description' => function() use ($generator) { return $generator->text($maxNbChars = 200); }
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
        foreach($games as $game)
        {
            shuffle($gameCategories);
            
            for($i = 0; $i < mt_rand(1, 3); $i++)
            {
                $game->addGamecategories($gameCategories[$i]);
            }
            $manager->persist($game);
        }
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