<template>
  <div id="pass-container">
    <div class="label">
      <span class="label-pass" style="margin-right: 10px;"><a href="">密码登录 </a></span>
      <span class="label-sms"><a href=""> 短信登录</a></span>
    </div>
    <input class="mobile" type="text" placeholder="你的手机号码" v-model="mobile">
    <input class="password" type="password" nplaceholder="密码" v-model="password">
    <div class="pass-other">
      <input type="radio" value="true">
      <span>记住我</span>
      <span>不是自己的电脑不要勾选此项</span>
    </div>
    <span class="err-help"><a href="">无法验证? 忘记密码?</a></span>
    <button class="login" @click="handleLogin">登录</button>
    <button class="register" @click="jumpRegister">注册</button>
  </div>
</template>

<script>
export default {
  name: 'PassLogin',
  data(){
    return {
      mobile: '13438036663',
      password: 'ssxhyw2515'
    }
  },
  methods: {
    async handleLogin(){
      let login_data = {
        mobile: this.mobile,
        password: this.password
      }
      const res = await this.$api.auth.login(login_data)
      if(res.data.token){
        localStorage.setItem('token', res.data.token)
        this.$store.commit('set_token',res.data.token)
        this.$router.push('/')
      }else{
        alert('请重新登录')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #pass-container {
    place-self: center;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-areas: "l-1 l-1"
                         "l-2 l-2"
                         "l-3 l-3"
                         "l-4 l-5"
                         "l-6 l-7";
    width: 4rem;
    .label {
      grid-area: l-1;
      justify-self: start;
      height: 0.4rem;
    }
    input:nth-child(n){
      font-size: 0.2rem;
      border: 0.01rem solid gray;
      border-radius: 0.02rem;
    }
    button:nth-child(n) {
      font-size: 0.2rem;
      font-weight: bold;
      border: 0.01rem solid gray;
      border-radius: 0.02rem;
      background: #4F943B;
    }
    .mobile {
      grid-area: l-2;
      height: 0.4rem;
    }
    .password {
      grid-area: l-3;
      height: 0.4rem;
      margin-top: 0.2rem;
    }

    .pass-other {
      grid-area: l-4;
      justify-self: start;
      height: 0.2rem;
      margin-top: 0.1rem;
      font-size: 0.12rem;
    }

    .err-help {
      grid-area: l-5;
      justify-self: end;
      height: 0.2rem;
      margin-top: 0.1rem;
      font-size: 0.12rem;
      margin-right: 0.1rem;
    }

    .login {
      grid-area: l-6;
      height: 0.4rem;
      width: 1.8rem;
      justify-self: start;
      margin-top: 0.1rem;
    }

    .register {
      grid-area: l-7;
      height: 0.4rem;
      width: 1.8rem;
      justify-self: end;
      margin-top: 0.1rem;
    }
  }
</style>