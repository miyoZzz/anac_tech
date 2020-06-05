<?php
declare(strict_types=1);

// 工具函数 获取实例
use Hyperf\Redis\Redis;
use Hyperf\Utils\ApplicationContext;

if (!function_exists('di')) {
    function di($id = null)
    {
        $container = ApplicationContext::getContainer();
        if($id) {
            return $container->get($id);
        }
        return $container;
    }
}

// 获取redis
if (!function_exists('redis')) {
    function redis()
    {
        return di(Redis::class);
    }
}