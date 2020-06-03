import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/index'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './styles/reset.css'
import './styles/border.css'
import './tools/rem'
import './plugins/vant.js'

Vue.config.productionTip = false
Vue.use(mavonEditor)
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
