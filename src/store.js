import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lat: '',
    long: ''
  },
  mutations: {
    setDeviceLocation (state, deviceLocation) {
      state.lat = deviceLocation.lat;
      state.long = deviceLocation.long;
    }
  }
})
