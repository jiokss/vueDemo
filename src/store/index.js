import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import user from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules:{
    //引进模块
    user
  }
})
