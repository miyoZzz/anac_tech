<template>
  <div id="aside-container">
    <div class="other-content"></div>
    <div class="aside-main">
      <div v-for="(item, index) in localData" :key="index" :class="item.class" 
      @click="handlerClick($event, item.component)">
        <div>{{ item.name }}</div>
        <!-- <router-link :to="item.path">{{ item.name }}</router-link>   -->
      </div>
    </div>
  </div>
</template>

<script>
import localData from '../data/home.json'
export default {
  name: 'AcAside',
  data(){
    return {
      localData
    }
  },
  methods: {
    handlerClick(e, component){
      let params = {
        component
      }
      // 对于store mutations中的方法
      this.$store.commit('set_component_name',params)
    }
  }
}
</script>

<style lang="scss" scoped>
#aside-container {
  display: grid;
  grid-area: aside;
  grid-template-rows: 1fr 6fr;
  margin: .05rem;
  .aside-main {
    display: grid;
    align-self: start;
    justify-self: center;
    width: 2.4rem;
    border: 0.02rem dashed #4F943B;
    border-radius: 0.08rem;
    :nth-child(n) {
      width: 1.2rem;
      height: .4rem;
      margin-top: .03rem;
      border: .01rem;
      font-size: .2rem;
      text-align: center;
      line-height: .4rem;
      place-self: center;
    }
  }
}
</style>