import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import yaml from 'yaml'
import axios from 'axios'

export type Index = {
  ':book': string
  ':page': string
  ':pdf_page': number
}

export type AllIndexes = {
  [tuneName: string]: Index[]
}

const downloadAllIndexes = async () => {
  const resp = await axios.get(import.meta.env.VITE_APP_PUBLIC_PATH + 'all_indexes.yml')
  return yaml.parse(resp.data) as AllIndexes
}

export const useRealbooksIndexesStore = defineStore(
  'realbooksIndexes',
  () => {
    const allIndexes: Ref<AllIndexes | null> = ref(null)
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
  },
  { persist: true }
)
