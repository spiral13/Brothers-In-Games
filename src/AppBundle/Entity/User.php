<?php

namespace AppBundle\Entity;


use AppBundle\Entity\Game;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Security\Core\User\AdvancedUserInterface;

/**
 * User
 */
class User implements AdvancedUserInterface, \Serializable
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var string
     */
    private $username;

    /**
     * @var string
     */
    private $mail;

    /**
     * @var string
     */
    private $password;

    /**
     * @var bool
     */
    private $isActive;

    /* JOIN */

    /**
     * @var Profile
     */
    private $profile;

    /**
     * @var Game
     */
    private $games;

    /**
     * @var Announcement
     */
    private $announcements;

    /**
     * @var Article
     */
    private $articles;

    /**
     * @var Messenger
     */
    private $messengerRead;

    /**
     * @var Messenger
     */
    private $messengerSend;

    /**
     * @var Message
     */
    private $messageRead;

    /**
     * @var Message
     */
    private $messageSend;

    /**
     * @var Friend
     */
    private $me;

    /**
     * @var Friend
     */
    private $myFriend;

    /**
     * @var Role
     */
    private $role;

    /* **************** **
    ** VARIOUS FUNCTION **
    ** **************** */

    public function __construct()
    {
        $this->isActive = true;

        $this->games = new ArrayCollection();
        $this->articles = new ArrayCollection();
        $this->announcements = new ArrayCollection();
        $this->messengerRead = new ArrayCollection();
        $this->messengerSend = new ArrayCollection();
        $this->messageRead = new ArrayCollection();
        $this->messageSend = new ArrayCollection();
        $this->me = new ArrayCollection();
        $this->myFriend = new ArrayCollection();
    }

    /** @see \Serializable::serialize() */
    public function serialize()
    {
        return serialize(array(
            $this->id,
            $this->username,
            $this->password,
            $this->isActive,
            // see section on salt below
            // $this->salt,
        ));
    }

    /** @see \Serializable::unserialize() */
    public function unserialize($serialized)
    {
        list (
            $this->id,
            $this->username,
            $this->password,
            $this->isActive,
            // see section on salt below
            // $this->salt
        ) = unserialize($serialized);
    }

    public function isAccountNonExpired()
    {
        return true;
    }

    public function isAccountNonLocked()
    {
        return true;
    }

    public function isCredentialsNonExpired()
    {
        return true;
    }

    public function isEnabled()
    {
        return $this->isActive;
    }

    /* *************** **
    ** GETTER & SETTER **
    ** *************** */

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set username
     *
     * @param string $username
     *
     * @return User
     */
    public function setUsername($username)
    {
        $this->username = $username;

        return $this;
    }

    /**
     * Get username
     *
     * @return string
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Set mail
     *
     * @param string $mail
     *
     * @return User
     */
    public function setMail($mail)
    {
        $this->mail = $mail;

        return $this;
    }

    /**
     * Get mail
     *
     * @return string
     */
    public function getMail()
    {
        return $this->mail;
    }

    /**
     * Set password
     *
     * @param string $password
     *
     * @return User
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get password
     *
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set isActive
     *
     * @param boolean $isActive
     *
     * @return User
     */
    public function setIsActive($isActive)
    {
        $this->isActive = $isActive;

        return $this;
    }

    /**
     * Get isActive
     *
     * @return bool
     */
    public function getIsActive()
    {
        return $this->isActive;
    }

    /**
     * @return bool
     */
    public function isIsActive()
    {
        return $this->isActive;
    }

    public function eraseCredentials()
    {
    }

    public function getSalt()
    {
        // you *may* need a real salt depending on your encoder
        // see section on salt below
        return null;
    }

    public function getRoles()
    {
        return array($this->getRole()->getCode());
    }

    /* JOIN */

    /**
     * @return mixed
     */
    public function getGames()
    {
        return $this->games;
    }

    public function addGames(Game $game)
    {
        $this->games[] = $game;

        return $this;
    }

    /**
     * @return Announcement
     */
    public function getAnnouncements()
    {
        return $this->announcements;
    }

    /**
     * @return Article
     */
    public function getArticles()
    {
        return $this->articles;
    }

    /**
     * @param Article $articles
     *
     * @return self
     */
    public function setArticles(Article $articles)
    {
        $this->articles = $articles;

        return $this;
    }

    /**
     * @return Messenger
     */
    public function getMessengerRead()
    {
        return $this->messengerRead;
    }

    /**
     * @return Messenger
     */
    public function getMessengerSend()
    {
        return $this->messengerSend;
    }

    /**
     * @return Messenger
     */
    public function getMessageRead()
    {
        return $this->messageRead;
    }

    /**
     * @return Messenger
     */
    public function getMessageSend()
    {
        return $this->messageSend;
    }

    /**
     * @return Role
     */
    public function getRole()
    {
        return $this->role;
    }

    /**
     * @param Role $role
     *
     * @return self
     */
    public function setRole($role)
    {
        $this->role = $role;

        return $this;
    }

    /**
     * @return Profile
     */
    public function getProfile()
    {
        return $this->profile;
    }

    /**
     * @param Profile $profile
     *
     * @return self
     */
    public function setProfile($profile)
    {
        $this->profile = $profile;

        return $this;
    }

    /**
     * @return Friend
     */
    public function getMyFriend()
    {
        return $this->myFriend;
    }

    /**
     * @param Friend $myFriend
     *
     * @return self
     */
    public function addMyFriend(User $myFriend)
    {
        $myFriend->addMe($this);
        $this->myFriend[] = $myFriend;

        return $this;
    }

    /**
     * @return Friend
     */
    public function getMe()
    {
        return $this->me;
    }

    /**
     * @param Friend $me
     *
     * @return self
     */
    public function addMe(User $me)
    {
        $this->me[] = $me;

        return $this;
    }

    /**
     * @param Announcement $announcements
     *
     * @return self
     */
    public function setAnnouncements(Announcement $announcements)
    {
        $this->announcements = $announcements;

        return $this;
    }
}
