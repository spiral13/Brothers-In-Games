<?php

namespace AppBundle\Entity;

/**
 * Messenger
 */
class Messenger
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var string
     */
    private $content;

    /**
     * @var \DateTime
     */
    private $published;

    /* JOIN */

    /**
     * @var User
     */
    private $receiver;

    /**
     * @var User
     */
    private $author;

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
     * Set content
     *
     * @param string $content
     *
     * @return Messenger
     */
    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * Get content
     *
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Set published
     *
     * @param \DateTime $published
     *
     * @return Messenger
     */
    public function setPublished($published)
    {
        $this->published = $published;

        return $this;
    }

    /**
     * Get published
     *
     * @return \DateTime
     */
    public function getPublished()
    {
        return $this->published;
    }

    /* JOIN */

    /**
     * @return User
     */
    public function getReceiver()
    {
        return $this->receiver;
    }

    /**
     * @param User $receiver
     *
     * @return self
     */
    public function setReceiver(User $receiver)
    {
        $this->receiver = $receiver;

        return $this;
    }

    /**
     * @return User
     */
    public function getAuthor()
    {
        return $this->author;
    }

    /**
     * @param User $author
     *
     * @return self
     */
    public function setAuthor(User $author)
    {
        $this->author = $author;

        return $this;
    }

    /* JOIN */
}

