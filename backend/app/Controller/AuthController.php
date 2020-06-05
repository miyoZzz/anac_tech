<?php

declare(strict_types=1);

namespace App\Controller;

use Hyperf\HttpServer\Contract\RequestInterface;

/**
 * Class AuthController
 * @package App\Controller
 * 用户注册 登录 发短信
 */
class AuthController
{

    /**
     * @param RequestInterface $request
     * @return array
     * 获取表单数据 返回token
     */
    public function register(RequestInterface $request): array
    {
        $user = $request->all();
        $user['created_at'] = time();
        $user['updated_at'] = time();
        $unique_user_key = $this->generateUnique($user);
        $res = redis()->hMSet($unique_user_key, $user);
        if($res){
            $code = 800;
            $token = $this->generateToken($user);
            // 生成session
            $session_key = $this->generateSession($token);
            $this->setSession($session_key, $unique_user_key);

            $pass_login_key = $this->generatePassLogin($user);
            $this->setPassLogin($pass_login_key, $unique_user_key);

            $exist_mobile_key = $this->generateExistMobile($user['mobile']);
            $this->setExistMobile($exist_mobile_key, $unique_user_key);

            $message = '注册成功';
            return compact('token', 'code', 'message');
        }
        return ['message' => '注册失败'];
    }

    /**
     * @param array $user
     * @return string
     * 根据用户基本信息生成token
     */
    public function generateToken(array $user): string
    {
        return hash('sha256','anac.tech' . $user['mobile'] . $user['password'] . time());
    }

    protected function generateUnique(array $user): string
    {
        $input_string = 'anac.tech' . $user['mobile'] . $user['password'] . $user['created_at'];
        return 'user_unique:'.hash('sha256', $input_string);
    }

    protected function generateSession(string $token): string
    {
        return 'user_session:' . $token;
    }

    protected function generatePassLogin(array $user): string
    {
        $input_string = 'anac.tech' . $user['mobile'] . $user['password'];
        return 'password_login:'.hash('sha256', $input_string);
    }

    protected function generateExistMobile(string $mobile): string
    {
        return 'exist_mobile:'.hash('sha256', 'anac.tech' . $mobile);
    }

    public function setSession(string $session_key, string $unique): void
    {
        redis()->set($session_key, $unique);
        // 设置3天后过期
        redis()->expire($session_key, 259200);
    }

    // TODO 考虑session存在情况 但客户端已经删除

    protected function setPassLogin(string $pass_login_key, string $unique_user_key): void
    {
        redis()->set($pass_login_key, $unique_user_key);
    }

    protected function setExistMobile(string $exist_mobile_key, string $unique_user_key): void
    {
        redis()->set($exist_mobile_key, $unique_user_key);
    }

    public function login(RequestInterface $request): array
    {
        $login_user = $request->all();
        // todo 客户端数据验证
        $pass_login_key = $this->generatePassLogin($login_user);
        $user_unique = redis()->get($pass_login_key);

        if($user_unique){
            $token = $this->generateToken($login_user);
            $session_key = $this->generateSession($token);
            $this->setSession($session_key, $user_unique);
            return compact('token');
        }
        // 抛出异常
    }

    /**
     * @param string $allow_key
     * @return string
     * 获取唯一用户key
     */
    public function getUserUnique(string $allow_key): string
    {
        return redis()->get($allow_key);
    }

    public function getUserInfo(string $user_unique):array
    {
        return redis()->get($user_unique);
    }


    /**
     * @param string $session_key
     * @param string $unique
     * @return void
     * 生成session
     */


    /**
     * @param RequestInterface $request
     * @return string
     * 接收 type 和 mobile 返回 短信验证码
     */
    public function getSms(RequestInterface $request): string
    {

        // TODO 实际获取短信逻辑
        $data = $request->all();
        if ($data['type'] && $data['mobile']) {
            return '111';
        } else {
            return "";
        }
    }
}



