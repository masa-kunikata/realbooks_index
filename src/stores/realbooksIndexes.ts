import { ref } from 'vue'
import { defineStore } from 'pinia'
import yaml from 'yaml'
import axios from 'axios'

const downloadAllIndexes = async () => {
  const resp = await axios.get(import.meta.env.VITE_APP_PUBLIC_PATH + 'all_indexes.yml')
  return yaml.parse(resp.data)
}

export const useRealbooksIndexesStore = defineStore('realbooksIndexes', () => {
  const allIndexes = ref(null)
  const query = ref('')

  const doLoad = async (reload = false) => {
    if (!allIndexes.value || reload) {
      allIndexes.value = await downloadAllIndexes()
    }
  }

  return {
    allIndexes,
    query,
    doLoad
  }
})
