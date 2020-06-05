import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    component: "",
    token: ""
  },
  mutations: {
    set_component_name(state, params){
      state.component = params.component
    },
    set_token(state, token){
      state.token = token
    }
  },
  actions: {
  },
  modules: {
  }
})
