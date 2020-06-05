<?php

declare(strict_types=1);
/**
 * This file is part of Hyperf.
 *
 * @link     https://www.hyperf.io
 * @document https://doc.hyperf.io
 * @contact  group@hyperf.io
 * @license  https://github.com/hyperf-cloud/hyperf/blob/master/LICENSE
 */

use Hyperf\HttpServer\Router\Router;

Router::addGroup('/auth/', function (){
    Router::addRoute(['POST'],'register', 'App\Controller\AuthController@register');
    Router::addRoute(['POST'],'login', 'App\Controller\AuthController@login');
    Router::post('getSms', 'App\Controller\AuthController@getSms');
});

Router::addGroup('/user/', function (){
    Router::addRoute(['POST','OPTIONS','GET'],'add', 'App\Controller\UserController@add');
//    Router::post('getSms', 'App\Controller\AuthController@getSms');
});
