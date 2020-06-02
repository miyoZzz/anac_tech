<template>
  <div id="nav-container"></div>
</template>

<script>
export default {
  name: 'AcNav'
}
</script>

<style lang="scss" scoped>
  #nav-container {
    display: grid;
    border-top: .01rem solid gray ;
    background: #323233;
    grid-area: nav;
  }
</style>