<template>
  <div id="home-container">
    <ac-header></ac-header>
    <ac-nav></ac-nav>
    <ac-aside></ac-aside>
    <ac-main></ac-main>
    <ac-footer></ac-footer>
  </div>
</template>
<style lang="scss" scoped>
  #home-container {
    display: grid;
    grid-template-rows:  0.6rem 0.6rem 12.13rem 0.6rem;
    grid-template-columns: 1fr 3fr;
    grid-template-areas: "header header"
                         "nav nav"
                         "aside main"
                         "footer footer"; 
  }
</style>
<script>
import AcHeader from '../components/AcHeader'
import AcNav from '../components/AcNav'
import AcFooter from '../components/AcFooter'
import AcAside from '../components/AcAside'
import AcMain from '../components/AcMain'
  export default {
    name: 'Home',
    components: {
      AcHeader,
      AcNav,
      AcFooter,
      AcAside,
      AcMain
    }
  }
</script>
