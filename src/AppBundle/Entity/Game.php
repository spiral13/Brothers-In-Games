<?php

namespace AppBundle\Entity;

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
     * @var string
     */
    private $title;

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

    /**
     * @return User
     */
    public function getUsers()
    {
        return $this->users;
    }

    /**
     * @return Announcement
     */
    public function getAnnouncements()
    {
        return $this->announcements;
    }
}

