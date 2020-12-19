import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deviceType: ''  // pc、mobile
  },
  mutations: {
    superviseDevice(state, deviceType) {
      state.deviceType = deviceType
    }
  }
})
