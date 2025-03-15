import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { CrossFrameEventBus } from '@repo/post-message-bus'

const app = createApp(App)

app.use(router)

app.mount('#app')

// 子项目初始化（目标窗口为父级）
const childBus = new CrossFrameEventBus(
  window.parent,
  'http://localhost:5200/', // 主项目域名
)

// 监听事件（注册 LOAD_CONFIG 监听器）
const offEvent = childBus.on('LOAD_CONFIG', (config) => {
  console.log('Received config:', config)
})

app.provide('offEvent', offEvent)
