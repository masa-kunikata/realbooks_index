import Vue from 'vue'
import Vuex from 'vuex'
import yaml from 'js-yaml'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allIndexes: {}
  },
  mutations: {
    setAllIndexes: (state, payload) => state.allIndexes = payload
  },
  actions: {
    async load({ commit }){
      const resp = await axios.get('/all_indexes.yml')
      const allIndexes = yaml.safeLoad(resp.data);
      commit('setAllIndexes', allIndexes)
    }
  },
  getters: {
    allIndexes: state => state.allIndexes,
  },
  modules: {
  }
})
