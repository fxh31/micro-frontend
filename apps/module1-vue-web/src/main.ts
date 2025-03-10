import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const app = createApp(App)

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  app.use(router)
  app.mount('#app')
} else {
  debugger
  renderWithQiankun({
    mount(props) {
      console.log('--mount', props)
      app
        .use(router)
        .mount(
          (props.container
            ? props.container.querySelector('#app')
            : document.getElementById('app')) as Element,
        )
    },
    bootstrap() {
      console.log('--bootstrap')
    },
    update() {
      console.log('--update')
    },
    unmount() {
      console.log('--unmount')
      app.unmount()
    },
  })
}
