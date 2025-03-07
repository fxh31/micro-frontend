import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import WujieVue from 'wujie-vue3'
import _ from 'lodash-es'

const app = createApp(App)

app.use(router)
app.use(WujieVue)

app.mount('#app')

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
]
console.log(
  _.filter(users, function (o) {
    return !o.active
  }),
)
window.lodash = _
