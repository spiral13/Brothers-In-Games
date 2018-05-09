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
     * @var int
     */
    private $maxData;

    /**
     * @var int
     */
    private $remainingData;

    /**
     * @var int
     */
    private $processedData;

    /**
     * @var int
     */
    private $maxPage;

    /**
     * @var int
     */
    private $remainingPage;

    /**
     * @var int
     */
    private $processedPage;

    /**
     * @var int
     */
    private $dataPerPage;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $url;

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
     * Set remainingData
     *
     * @param integer $remainingData
     *
     * @return HistoryFill
     */
    public function setRemainingData($remainingData)
    {
        $this->remainingData = $remainingData;

        return $this;
    }

    /**
     * Get remainingData
     *
     * @return int
     */
    public function getRemainingData()
    {
        return $this->remainingData;
    }

    /**
     * Set processedData
     *
     * @param integer $processedData
     *
     * @return HistoryFill
     */
    public function setProcessedData($processedData)
    {
        $this->processedData = $processedData;

        return $this;
    }

    /**
     * Get processedData
     *
     * @return int
     */
    public function getProcessedData()
    {
        return $this->processedData;
    }

    /**
     * Set maxPage
     *
     * @param integer $maxPage
     *
     * @return HistoryFill
     */
    public function setMaxPage($maxPage)
    {
        $this->maxPage = $maxPage;

        return $this;
    }

    /**
     * Get maxPage
     *
     * @return int
     */
    public function getMaxPage()
    {
        return $this->maxPage;
    }

    /**
     * Set remainingPage
     *
     * @param integer $remainingPage
     *
     * @return HistoryFill
     */
    public function setRemainingPage($remainingPage)
    {
        $this->remainingPage = $remainingPage;

        return $this;
    }

    /**
     * Get remainingPage
     *
     * @return int
     */
    public function getRemainingPage()
    {
        return $this->remainingPage;
    }

    /**
     * Set processedPage
     *
     * @param integer $processedPage
     *
     * @return HistoryFill
     */
    public function setProcessedPage($processedPage)
    {
        $this->processedPage = $processedPage;

        return $this;
    }

    /**
     * Get processedPage
     *
     * @return int
     */
    public function getProcessedPage()
    {
        return $this->processedPage;
    }

    /**
     * @return int
     */
    public function getDataPerPage()
    {
        return $this->dataPerPage;
    }

    /**
     * @param int $dataPerPage
     *
     * @return self
     */
    public function setDataPerPage($dataPerPage)
    {
        $this->dataPerPage = $dataPerPage;

        return $this;
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

