import Vue from 'vue'
import Vuex from 'vuex'
/**
 * 根级别的数据
 */
import state from './common/state.js'
import mutations from './common/mutations.js'
import actions from './common/actions.js'
import getters from './common/getters.js'
Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
export default store
