<?php

namespace AppBundle\Service;

class SlugConverter
{
    public function toSlug($string)
    {
        $string = strtolower(trim(strip_tags($string)));

        return preg_replace('/[^a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*/', '-', $string);
    }
}