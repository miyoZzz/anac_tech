<template>
  <div id="home-container">
    <input type="text" v-model="mobile">
    <input type="password" v-model="password">
    <button @click="formHandle">提交</button>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  name: 'Test',
  data(){
    return {
      mobile: '',
      password: ''
    }
  },
  methods: {
    async formHandle(){
      const client_data = {
        mobile: this.mobile,
        password: this.password
      }
      const result = await this.$api.test.form(client_data)
      console.log(result)
    }
  }
}
</script>