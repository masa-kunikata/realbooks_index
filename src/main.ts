import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import naive from './plugins/naive'
import pinia from './plugins/pinia'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(naive)

app.mount('#app')
