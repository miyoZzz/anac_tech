import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/index'
import mavonEditor from 'mavon-editor'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'mavon-editor/dist/css/index.css'
import './styles/reset.css'
import './styles/border.css'
import './tools/rem'

Vue.use(Vant);
Vue.config.productionTip = false
Vue.use(mavonEditor)
Vue.prototype.$api = api
// Vue.prototype.$vant = Vant
// Toast.fail('fdfd')
// console.log(Toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
