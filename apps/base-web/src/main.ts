import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from '@/store'

import WujieVue from 'wujie-vue3'

const app = createApp(App)

app.use(router)
setupStore(app)

app.use(WujieVue)

app.mount('#app')
