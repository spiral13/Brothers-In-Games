<?php

namespace AppBundle\Entity;

/**
 * HistoryFill
 */
class HistoryFill
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $url;

    /**
     * @var int
     */
    private $maxData;

    /**
     * @var int
     */
    private $page;

    /**
     * @var \DateTime
     */
    private $date;

    /**
     * @var string
     */
    private $log;


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
     * Set name
     *
     * @param string $name
     *
     * @return HistoryFill
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set url
     *
     * @param string $url
     *
     * @return HistoryFill
     */
    public function setUrl($url)
    {
        $this->url = $url;

        return $this;
    }

    /**
     * Get url
     *
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Set maxData
     *
     * @param integer $maxData
     *
     * @return HistoryFill
     */
    public function setMaxData($maxData)
    {
        $this->maxData = $maxData;

        return $this;
    }

    /**
     * Get maxData
     *
     * @return int
     */
    public function getMaxData()
    {
        return $this->maxData;
    }

    /**
     * Set page
     *
     * @param integer $page
     *
     * @return HistoryFill
     */
    public function setPage($page)
    {
        $this->page = $page;

        return $this;
    }

    /**
     * Get page
     *
     * @return int
     */
    public function getPage()
    {
        return $this->page;
    }

    /**
     * Set date
     *
     * @param \DateTime $date
     *
     * @return HistoryFill
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set log
     *
     * @param string $log
     *
     * @return HistoryFill
     */
    public function setLog($log)
    {
        $this->log = $log;

        return $this;
    }

    /**
     * Get log
     *
     * @return string
     */
    public function getLog()
    {
        return $this->log;
    }
}

