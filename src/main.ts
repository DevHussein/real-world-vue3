import { createApp, reactive } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

export interface IGStore {
  flashMessage: string
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
const GStore: IGStore | undefined = reactive({ flashMessage: '' })
app.provide('GStore', GStore)
app.mount('#app')
