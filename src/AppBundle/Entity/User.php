<?php

namespace AppBundle\Entity;


use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * User
 */
class User implements UserInterface, \Serializable
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
    private $friend1;

    /**
     * @var Friend
     */
    private $friend2;

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
        $this->friend1 = new ArrayCollection();
        $this->friend2 = new ArrayCollection();
    }

    /** @see \Serializable::serialize() */
    public function serialize()
    {
        return serialize(array(
            $this->id,
            $this->username,
            $this->password,
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
            // see section on salt below
            // $this->salt
        ) = unserialize($serialized);
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
     * @return Friend
     */
    public function getFriend1()
    {
        return $this->friend1;
    }

    /**
     * @return Friend
     */
    public function getFriend2()
    {
        return $this->friend2;
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
    public function setRole(Role $role)
    {
        $this->role = $role;

        return $this;
    }
}
