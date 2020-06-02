<template>
  <div id="header-container">
      <div class="logo" @click="goHome">
        <div class="logo-1"></div>
        <div class="logo-2"></div>  
      </div>
      <ac-search></ac-search>
      <ac-user></ac-user>
  </div>
</template>

<script>
import AcSearch from './header/AcSearch'
import AcUser from './header/AcUser'
// import router from 'vue-router'
export default {
  name: 'AcHeader',
  components: {
    AcSearch,
    AcUser
  },
  methods: {
    goHome(){
      this.$router.push({path:'/'})
    } 
  }
}
</script>

<style lang="scss" scoped>
#header-container {
  display: grid;
  grid-area: header;
  grid-template-columns: 1.5fr 3fr 1.5fr;
  background: #323233;
  .logo {
    place-self: center; // 居中
    // logo图标
    .logo-1 {
      width: .2rem;
      height: .2rem;
      background:skyblue;
      float: left;
      border-top-right-radius: .08rem;
      border-bottom-left-radius: .1rem;
    }
    .logo-2 {
      width: .2rem;
      height: .2rem;
      background: #EE86A0;
      float: left;
      border-radius: .1rem;
    }
  }

}
  
</style>
