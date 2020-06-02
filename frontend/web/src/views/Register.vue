<template>
  <div id="register-container">
    <ac-header></ac-header>
    <ac-nav></ac-nav>
    <register-main></register-main>
    <ac-footer></ac-footer>
  </div>
</template>

<script>
import AcHeader from '../components/AcHeader'
import AcNav from '../components/AcNav'
import RegisterMain from '../components/RegisterMain'
import AcFooter from '../components/AcFooter'
export default {
  name: 'Register',
  components: {
    AcHeader,
    AcNav,
    RegisterMain,
    AcFooter
  }
}
</script>

<style lang="scss" scoped>
#register-container {
  display: grid;
  grid-template-rows: 0.6rem 0.6rem 12.13rem 0.6rem;
  grid-template-areas: "header"
                       "nav"
                       "register-main"
                       "footer";

}
</style>