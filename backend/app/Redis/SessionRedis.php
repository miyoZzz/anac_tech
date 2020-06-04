<?php

use Hyperf\Redis\Redis;

class SessionRedis extends Redis
{
    protected $poolName = 'session';
}