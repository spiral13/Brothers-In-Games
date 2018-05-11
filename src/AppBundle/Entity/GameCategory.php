<?php

namespace AppBundle\Entity;

use AppBundle\Entity\Game;
use Doctrine\Common\Collections\ArrayCollection;

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

    public function __toString()
    {
        return $this->getTitle();
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
        $game->addGamecategories($this);
        $this->games[] = $game;

        return $this;
    }
}
