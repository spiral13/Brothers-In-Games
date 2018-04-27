<?php

namespace AppBundle\Handler;

use Symfony\Component\Security\Http\Authentication\AuthenticationSuccessHandlerInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationFailureHandlerInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class AuthenticationHandler implements AuthenticationSuccessHandlerInterface, AuthenticationFailureHandlerInterface
{
    public function onAuthenticationSuccess(Request $request, TokenInterface $token)
    {
        $responseData = [
            'success' => true,
        ];

        return new JsonResponse($responseData);
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {
        $responseData = [
            'success' => false,
        ];

        return new JsonResponse($responseData);
    }

}