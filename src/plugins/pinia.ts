import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const LOCAL_STORAGE_KEY = 'realbook_index_storage'

const pinia = createPinia()
pinia.use(createPersistedState({
    storage: localStorage,
    key: (id: string) => `${LOCAL_STORAGE_KEY}$-${id}`,
  }))

export default pinia
