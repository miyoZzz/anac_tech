<template>
  <div id="user-container">
    <div v-if="is_online" class="online">
      <a>{{ userinfo.nickname }}</a>
    </div>
    <div v-else class="offline">
      <router-link to="login" class="jump-login">登录</router-link>
      <span>-</span>
      <router-link to="register" class="jump-register">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcUser',
  data () {
    return {
      is_online: false,
      userinfo: {
        nickname: 'miyoZzz',
        sex: 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#user-container {
  display: grid;
  place-items: center;
  .online {
    font-size: .2rem;
  }
  .offline {
    .jump-login {
      font-size: .2rem;
    }
    .jump-register {
      font-size: .2rem;
    }
  }
}
</style>
