import Vue from "vue"
import Vuex from "vuex"

import mainData from '@/store/mainData'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: { mainData }
})
