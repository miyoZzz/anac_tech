<template>
  <div id="pass-container">
    <div class="label">
      <span class="label-pass" style="margin-right: 10px;"><a href="">密码登录 </a></span>
      <span class="label-sms"><a href=""> 短信登录</a></span>
    </div>
    <input class="mobile" type="text" placeholder="你的手机号码">
    <input class="password" type="password" name="" id="" placeholder="密码">
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
  #pass-container {
    place-self: center;
    // align-self: start;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-areas: "l-1 l-1"
                         "l-2 l-2"
                         "l-3 l-3"
                         "l-4 l-5"
                         "l-6 l-7";
    // border: 1px solid red;
    width: 400px;
    .label {
      grid-area: l-1;
      // place-self: center;
      justify-self: start;
      // align-self: center;
      height: 40px;
    }
    .mobile {
      grid-area: l-2;
      height: 40px;
      // margin-top: 20px;
    }
    .password {
      grid-area: l-3;
      height: 40px;
      margin-top: 20px;
    }

    .pass-other {
      grid-area: l-4;
      justify-self: start;
      height: 20px;
      margin-top: 10px;
      font-size: 12px;
    }

    .err-help {
      grid-area: l-5;
      justify-self: end;
      height: 20px;
      margin-top: 10px;
      font-size: 12px;
      margin-right: 10px;
    }

    .login {
      grid-area: l-6;
      height: 40px;
      width: 180px;
      justify-self: start;
      margin-top: 10px;
    }

    .register {
      grid-area: l-7;
      height: 40px;
      width: 180px;
      justify-self: end;
      margin-top: 10px;
    }
  }
</style>