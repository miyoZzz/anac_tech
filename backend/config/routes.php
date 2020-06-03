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
    Router::post('register', 'App\Controller\AuthController@register');
    Router::post('getSms', 'App\Controller\AuthController@getSms');
});

Router::addGroup('/user/', function (){
    Router::addRoute(['POST','OPTIONS'],'add', 'App\Controller\UserController@add');
//    Router::post('getSms', 'App\Controller\AuthController@getSms');
});
