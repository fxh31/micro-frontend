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
  renderWithQiankun({
    mount(props) {
      console.log('--mount', props)
      // 修改主应用的全局状态
      props.setGlobalState({
        user: 'aaa',
      })
      render(props)

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

function render(props) {
  if (props) {
    props.onGlobalStateChange((state, prev) => {
      console.log('子应用监听主应用注册并触发改变的值', state, prev)
    })
  }
}
