<template>
  <div id="sms-container">
    <div class="label">
      <span class="label-pass" style="margin-right: 10px;"><a href="">密码登录 </a></span>
      <span class="label-sms"><a href=""> 短信登录</a></span>
    </div>
    <input class="mobile" type="text" placeholder="你的手机号码">
    <input class="sms" type="text" name="" id="" placeholder="请输入短信验证码">
    <button class="get-sms">获取验证码</button>
    <div class="pass-other">
      <input type="radio" name="" id="">
      <span>记住我</span>
      <span>不是自己的电脑不要勾选此项</span>
    </div>
    <span class="err-help"><a href="">无法验证? 忘记密码?</a></span>
    <button class="login">登录</button>
    <button class="register">注册</button>
  </div>
</template>

<script>
export default {
  name: 'PassLogin'
}
</script>

<style lang="scss" scoped>
  #sms-container {
    place-self: center;
    display: grid;
    grid-template-columns: repeat(3,100px);
    grid-template-areas: "l-1 l-1 l-1 l-1"
                         "l-2 l-2 l-2 l-2"
                         "l-3 l-3 l-3 l-4"
                         "l-5 l-5 l-5 l-6"
                         "l-7 l-7 l-8 l-8";
    // border: 1px solid red;
    width: 4rem;

     input:nth-child(n){
      font-size: 0.2rem;
      border: 0.01rem solid gray;
      border-radius: 0.02rem;
    }
    button:nth-last-child(n):not(:nth-last-child(n+3)) {
      font-size: 0.2rem;
      font-weight: bold;
      border: 0.01rem solid gray;
      border-radius: 0.02rem;
      background: #4F943B;
    }

    .label {
      grid-area: l-1;
      justify-self: start;
      height: 0.4rem;
    }
    .mobile {
      grid-area: l-2;
      height: 0.4rem;
    }
    .sms {
      grid-area: l-3;
      height: 0.4rem;
      margin-right: 0.01rem;
      margin-top: 0.2rem;
    }
    .get-sms {
      grid-area: l-4;

      height: 0.42rem;
      font-size: 0.16rem;
      // font-weight: bold;
      background: #4F943B;
      border: 0.01rem solid gray;
      border-radius: 0.02rem;
      width: 1.2rem;
      justify-self: end;
      margin-left: 0.01rem;
      margin-top: 0.2rem;
    }

    .pass-other {
      grid-area: l-5;
      justify-self: start;
      height: 0.2rem;
      margin-top: 0.1rem;
      font-size: 0.12rem;
    }

    .err-help {
      grid-area: l-6;
      justify-self: start;
      height: 0.2rem;
      margin-top: 0.1rem;
      font-size: 0.12rem;
      // margin-right: 10px;
    }

    .login {
      grid-area: l-7;
      justify-self: start;
      height: 0.4rem;
      width: 1.8rem;
      // margin-right: 5px;
      margin-top: 0.1rem;
    }

    .register {
      grid-area: l-8;
      justify-self: end;
      height: 0.4rem;
      width: 1.8rem;
      // margin-left: 5px;
      margin-top: 0.1rem;
    }
  }
</style>