<template>
  <div id="article-container">
    <el-form class="login-form">
      <el-input placeholder="请输入内容">
        <el-select slot="prepend" v-model="select">
          <el-option label="中国大陆" value="1"></el-option>
        </el-select>
      </el-input>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
#article-container {
  display: grid;
  // width: 400px;
  height: 600px;
  border: 1px solid black;
  place-items: center;
  .login-form {
    border: 1px solid red;
  }
}

</style>

<script>
export default {
  name: 'Article',
  data() {
    return {
      input3: '',
      select: ''
    }
  }
}
</script>