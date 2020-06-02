<template>
  <div id="atlist-container">
    <div class="other-content"></div>
    <div class="article-list">
      <div v-for="(item, index) in articleData" :key="index" class="list-item">
        <span class="article-title">{{ item.id }}.  {{ item.title }}</span>
        <button class="article-edit">修改</button>
        <button class="article-delete">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
import articleData from '@/data/article.json'
export default {
  name: 'ArticleList',
  data() {
    return {
      articleData
    }
  }
}
</script>

<style lang="scss" scoped>
  #atlist-container {
    display: grid;
    align-self: start;
    justify-self: center;
    grid-template-rows: 1rem auto;
    width: 10rem;
    // border: 1px solid black;
    .other-content {
      border: 1px solid red;
    }
    .article-list {
      display: grid;
      .list-item {
        display: grid;
        grid-template-columns: 5fr 1.5fr 1.5fr;
        grid-template-areas: "aaa bbb ccc";
        height: .4rem;
        line-height: .4rem;
        border: 1px solid gray;
        border-radius: 0.02rem;
        margin-top: .2rem;
        // background: ;
        .article-title {
          grid-area: aaa;
          font-size: .16rem;
        }
        .article-edit {
          grid-area: bbb;
          font-size: .2rem;
          border-left: 1px solid gray;
          background: #87CEEB;
        }
        .article-delete {
          grid-area: ccc;
          font-size: .2rem;
          border-left: 1px solid gray;
          background: #EE86A0;
        }
      }
      
    }
  }
</style>