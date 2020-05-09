import Vue from 'vue'
import Vuex from 'vuex'
import yaml from 'js-yaml'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allIndexes: {},
    query: '',
  },
  mutations: {
    setAllIndexes: (state, payload) => state.allIndexes = payload,
    setQuery: (state, payload) => state.query = payload
  },
  actions: {
    async load({ commit }){
      const resp = await axios.get(process.env.VUE_APP_PUBLIC_PATH + 'all_indexes.yml')
      const allIndexes = yaml.safeLoad(resp.data);
      commit('setAllIndexes', allIndexes)
    },
    setQuery({ commit }, query){
      commit('setQuery', query)
    }
  },
  getters: {
    allIndexes: state => state.allIndexes,
    query: state => state.query,
  },
  modules: {
  }
})
