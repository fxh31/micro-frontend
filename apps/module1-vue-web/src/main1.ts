import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router' // 改为工厂函数创建路由实例
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let appInstance = null
let routerInstance = null

// 路由实例工厂函数（确保每次创建新实例）
function createRouterInstance() {
  return createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'about',
        component: import('./views/AboutView.vue'),
        props: true,
      },
      {
        path: '/qiankun/:id',
        name: 'qiankunHome',
        component: () => import('./views/QiankunHomeView.vue'),
        props: true,
      },
    ],
  })
}

// 独立运行逻辑
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  appInstance = createApp(App)
  routerInstance = createRouterInstance()
  appInstance.use(routerInstance)
  appInstance.mount('#app')
}

// Qiankun 生命周期
renderWithQiankun({
  async mount(props) {
    console.log('--mount', props)

    // 1. 创建全新应用实例
    appInstance = createApp(App)

    // 2. 创建新路由实例
    routerInstance = createRouterInstance()
    appInstance.use(routerInstance)

    // 3. 获取容器（优先使用主应用提供的容器）
    const container = props.container
      ? props.container.querySelector('#app')
      : document.getElementById('app')

    // 4. 清理残留内容（防止重复挂载）
    if (container) {
      container.innerHTML = ''
    }

    // 5. 挂载应用
    appInstance.mount(container)

    // 6. 传递主应用属性
    appInstance.provide('mainProps', props)

    // 7. 设置全局状态（示例）
    props.setGlobalState({ user: 'aaa' })
  },
  async unmount() {
    console.log('--unmount')
    if (appInstance) {
      // 彻底销毁实例
      appInstance.unmount()
      appInstance._container.innerHTML = '' // 清理容器
      appInstance = null
      routerInstance = null
    }
  },
  async bootstrap() {
    console.log('--bootstrap')
  },
  async update() {
    console.log('--update')
  },
})
