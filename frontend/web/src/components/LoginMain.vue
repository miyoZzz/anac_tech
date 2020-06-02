<template>
  <div id="lgmain-container">
    <div class="login-aside"></div>
    <div class="login-main">
      <!-- <pass-login></pass-login> -->
      <sms-login></sms-login>
    </div>
  </div>
</template>

<script>
// import PassLogin from './login/PassLogin'
import SmsLogin from './login/SmsLogin'
export default {
  name: 'LoginMain',
  components: {
    // PassLogin,
    SmsLogin
  }
}
</script>

<style lang="scss" scoped>
#lgmain-container {
  display: grid;
  grid-area: login-main;
  height: 600px;
  grid-template-columns: 1.5fr 2fr;
  .login-aside {
    height: 500px;
    align-self: center;
    border-right: 1px solid gray;
  }
  .login-main {
    display: grid;
    grid-template-columns: auto auto;
    // width: 400px;
  }
}
</style>