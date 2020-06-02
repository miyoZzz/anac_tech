<template>
  <div id="main-container">
      <!-- <div class="main-content"> -->
        <component :is="is_component"></component>
        <!-- {{ is_component }} -->
      <!-- </div> -->
  </div>
</template>

<script>
import ArticleList from '../components/article/List'
export default {
  name: 'AcMain',
  components: {
    ArticleList
  },
  data(){
    return {
      // is_component: "article-list"
    }
  },
  computed: {     
    is_component: function(){
      return this.$store.state.component
    }
  }
}
</script>

<style lang="scss" scoped>
#main-container {
  display: grid;
  grid-area: main;
  height: 12.13rem;
  // border: 1px solid red;
  // .main-content {
  //   place-self: center;
  //   height: 6rem;
  //   // border: 1px solid red;
  //   background: black;
  // }
}
</style>