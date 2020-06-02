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
    width: 400px;
    .label {
      grid-area: l-1;
      justify-self: start;
      height: 40px;
    }
    .mobile {
      grid-area: l-2;
      height: 40px;
    }
    .sms {
      grid-area: l-3;
      height: 40px;
      margin-right: 1px;
      margin-top: 20px;
    }
    .get-sms {
      grid-area: l-4;
      height: 46px;
      margin-left: 1px;
      margin-top: 20px;
    }

    .pass-other {
      grid-area: l-5;
      justify-self: start;
      height: 20px;
      margin-top: 10px;
      font-size: 12px;
    }

    .err-help {
      grid-area: l-6;
      justify-self: start;
      height: 20px;
      margin-top: 10px;
      font-size: 12px;
      // margin-right: 10px;
    }

    .login {
      grid-area: l-7;
      justify-self: start;
      height: 40px;
      width: 180px;
      // margin-right: 5px;
      margin-top: 10px;
    }

    .register {
      grid-area: l-8;
      justify-self: end;
      height: 40px;
      width: 180px;
      // margin-left: 5px;
      margin-top: 10px;
    }
  }
</style>