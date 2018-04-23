<?php

namespace AppBundle\Entity;

/**
 * GameCategory
 */
class GameCategory
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var string
     */
    private $title;

    /* JOIN */

    /**
     * @var game
     */
    private $games;

    /* **************** **
    ** VARIOUS FUNCTION **
    ** **************** */

    public function __construct()
    {
        $this->games = new ArrayCollection();
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
     * @return GameCategory
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

    /* JOIN */

    /**
     * @return mixed
     */
    public function getGames()
    {
        return $this->games;
    }
}

