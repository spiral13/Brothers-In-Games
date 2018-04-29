<?php

namespace AppBundle\Service;

class NormalizeValue
{
    public function deemphasizeString($string)
    {
        $str = htmlentities($string, ENT_NOQUOTES, 'utf-8');
        $str = preg_replace('#&([A-za-z])(?:uml|circ|tilde|acute|grave|cedil|ring);#', '\1', $str);
        $str = preg_replace('#&([A-za-z]{2})(?:lig);#', '\1', $str);
        $str = preg_replace('#&[^;]+;#', '', $str);
        
        return $str;
    }
}