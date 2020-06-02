<template>
  <div id="atadd-container">
    <div class="add-content">
      <mavon-editor  style="height:10rem;" v-model="value"/>
    </div>
    <button class="add-save">提交新增</button>
  </div>
</template>

<script>
export default {
  name: 'ArticleAdd',
  data() {
    return {
      value: ""
    }
  }
  // data(){
  //   return {
  //     toolbars: {
  //       underline: true, // 下划线
  //       strikethrough: true, // 中划线
  //       mark: true, // 标记
  //       superscript: true, // 上角标
  //       subscript: true, // 下角标
  //       link: true, // 链接
  //       imagelink: true, // 图片链接
  //       table: true, // 表格
  //       fullscreen: true, // 全屏编辑
  //       readmodel: true, // 沉浸式阅读
  //       undo: true, // 上一步
  //       redo: true, // 下一步
  //       trash: true, // 清空
  //       save: true, // 保存（触发events中的save事件）
  //       /* 1.4.2 */
  //       // navigation: true, // 导航目录
  //       /* 2.1.8 */
  //       alignleft: true, // 左对齐
  //       aligncenter: true, // 居中
  //       alignright: true, // 右对齐
  //       /* 2.2.1 */
  //       subfield: true, // 单双栏模式
  //       preview: true, // 预览
  //     }
  //   }
  // }
}
</script>

<style lang="scss" scoped>
#atadd-container {
  display: grid;
  grid-template-rows: 10.6fr 1fr;
  // margin-top: 0.5rem;
  .add-content {
    width: 11rem;
    align-self: center;
  }
  .add-save {
    width: 11rem;
    height: .8rem;
    font-size: .3rem;
    font-weight: bold;
    color: green;
    background: #87CEEB;
    border: 0.02rem dashed #4F943B;
    border-radius: 0.02rem;
    line-height: .8rem;
  }   
}
</style>