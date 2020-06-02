<template>
  <div id="login-container">
    <ac-header></ac-header>
    <ac-nav></ac-nav>
    <login-main></login-main>
    <ac-footer></ac-footer>
  </div>
</template>

<script>
import AcHeader from '../components/AcHeader'
import AcNav from '../components/AcNav'
import LoginMain from '../components/LoginMain'
import AcFooter from '../components/AcFooter'
export default {
  name: 'Login',
  components: {
    AcHeader,
    AcNav,
    LoginMain,
    AcFooter
  }
}
</script>

<style lang="scss" scoped>
#login-container {
  display: grid;
  grid-template-rows: 60px 60px auto 60px;
  grid-template-areas: "header"
                       "nav"
                       "login-main"
                       "footer";

}
</style>