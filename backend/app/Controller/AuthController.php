<?php

declare(strict_types=1);

namespace App\Controller;

use Hyperf\HttpServer\Contract\RequestInterface;

/**
 * Class AuthController
 * @package App\Controller
 * 用户注册 登录 发短信
 */
class AuthController {

    /**
     * @param RequestInterface $request
     * @return array
     * 获取表单数据 返回token
     */
    public function register(RequestInterface $request): string
    {
        $user = $request->all();
        // 写入 redis
        return md5('miyofei');
//        return $request->all();
    }

    /**
     * @param RequestInterface $request
     * @return string
     * 接收 type 和 mobile 返回 短信验证码
     */
    public function getSms(RequestInterface $request): string
    {
        // TODO 实际获取短信逻辑
        $data  = $request->all();
        if($data['type'] && $data['mobile']) {
            return '111';
        }else{
            return "";
        }
    }
}



