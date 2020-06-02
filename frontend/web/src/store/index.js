import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    component: ""
  },
  mutations: {
    set_component_name(state, params){
      state.component = params.component
    }
  },
  actions: {
  },
  modules: {
  }
})
