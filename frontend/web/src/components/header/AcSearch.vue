<template>
  <div id="search-container">
    <div class="search-input">
      <!-- <label for="search">搜索：</label> -->
      <input type="search" placeholder="输入你感兴趣的内容">
      <button>搜索</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#search-container {
  display: grid;
  .search-input {
    place-self: center;
    input {
      height: .4rem;
      width: 2.6rem;
      font-size: .2rem;
      border: 0.01rem solid #87CEEB;
    }
    button {
      height: .4rem;
      width: .6rem;
      font-size: .2rem;
      background: #448372;
      border-left: 0.02rem solid gray;
      border-radius: 0.03rem;
      margin-right: 0.02rem;
    }
  }
  
}
</style>

<script>
export default {
  name: 'AcSearch'
}
</script>