<?php

namespace AppBundle\Entity;

use AppBundle\Entity\GameCategory;
use AppBundle\Entity\User;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Game
 */
class Game
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var int
     */
    private $apiId;

    /**
     * @var string
     */
    private $title;

    /**
     * @var string
     */
    private $slug;

    /**
     * @var string
     */
    private $cover;

    /* JOIN */

    /**
     * @var GameCategory
     */
    private $gamecategories;

    /**
     * @var User
     */
    private $users;

    /**
     * @var Announcement
     */
    private $announcements;

    /* **************** **
    ** VARIOUS FUNCTION **
    ** **************** */

    public function __toString()
    {
        return $this->getTitle();
    }

    public function __construct()
    {
        $this->gamecategories = new ArrayCollection();
        $this->users = new ArrayCollection();
        $this->announcements = new ArrayCollection();
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
     * @return int
     */
    public function getApiId()
    {
        return $this->apiId;
    }

    /**
     * @param int $apiId
     *
     * @return self
     */
    public function setApiId($apiId)
    {
        $this->apiId = $apiId;

        return $this;
    }

    /**
     * Set title
     *
     * @param string $title
     *
     * @return Game
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @return string
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * @param string $slug
     *
     * @return self
     */
    public function setSlug($slug)
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * Set cover
     *
     * @param string $cover
     *
     * @return Game
     */
    public function setCover($cover)
    {
        $this->cover = $cover;

        return $this;
    }

    /**
     * Get cover
     *
     * @return string
     */
    public function getCover()
    {
        return $this->cover;
    }

    /* JOIN */

    /**
     * @return mixed
     */
    public function getGamecategories()
    {
        return $this->gamecategories;
    }

    public function addGamecategories(GameCategory $gamecategorie)
    {
        $this->gamecategories[] = $gamecategorie;

        return $this;
    }

    /**
     * @return User
     */
    public function getUsers()
    {
        return $this->users;
    }

    public function addUsers(User $user)
    {
        $user->addGames($this);
        $this->users[] = $user;

        return $this;
    }

    /**
     * @return Announcement
     */
    public function getAnnouncements()
    {
        return $this->announcements;
    }
}
