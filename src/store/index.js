import Vue from 'vue'
import Vuex from 'vuex'
import yaml from 'js-yaml'
import axios from 'axios'

const downloadAllIndexes = async () => {
  const resp = await axios.get(process.env.VUE_APP_PUBLIC_PATH + 'all_indexes.yml')
  return yaml.safeLoad(resp.data);
}

const LOCAL_STORAGE_KEY = 'realbook_index_storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allIndexes: null,
    query: '',
    pdfUrls: {
      Colorado: '',
      EvansBk: '',
      JazzFake: '',
      JazzLTD: '',
      Library: '',
      NewReal1: '',
      NewReal2: '',
      NewReal3: '',
      Realbk1: '',
      Realbk2: '',
      Realbk3: '',
      TheBook: '',
    },
  },
  mutations: {
    setAllIndexes: (state, payload) => state.allIndexes = payload,
    setQuery: (state, payload) => state.query = payload,
    setPdfUrls: (state, payload) => state.pdfUrls = payload,
    save(state) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
    },
    load(state) {
      const storeJson = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (!storeJson) return;
      const store = JSON.parse(storeJson)
      this.replaceState(Object.assign(state, store))
    }
  },
  actions: {
    putQuery({ commit }, query){ commit('setQuery', query) },
    putPdfUrls({ commit }, pdfUrls){ commit('setPdfUrls', pdfUrls) },
    doSave({ commit }) { commit('save') },
    async doLoad({ state, commit }, reload = false){
      commit('load')

      if (!state.allIndexes || reload) {
        const allIndexes = await downloadAllIndexes();
        commit('setAllIndexes', allIndexes)
      }
    },
  },
  getters: {
    allIndexes: state => state.allIndexes,
    query: state => state.query,
    pdfUrls: state => state.pdfUrls,
  },
  modules: {
  }
})
