<?php

namespace AppBundle\Entity;

/**
 * Friend
 */
class Friend
{
    /**
     * @var int
     */
    private $id;

    /* JOIN */

    /**
     * @var User
     */
    private $user1;

    /**
     * @var User
     */
    private $user2;

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
}

