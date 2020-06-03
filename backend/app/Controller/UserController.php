<?php

declare(strict_types=1);

namespace App\Controller;


use App\Model\User;
use Hyperf\HttpServer\Annotation\AutoController;

/**
 * Class UserController
 * @package App\Controller
 * @AutoController()
 */
class UserController
{

    public function add()
    {
        $data = [
            'nickname' => 'miyofei',
            'mobile' => '13438036663',
            'password' => md5('ssxhyw2515'),
            'gender' => 1,
            'avatar' => 'images/miyofei.png'
        ];
        return User::create($data);

    }
}
