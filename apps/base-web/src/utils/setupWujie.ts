// 可直接使用官方封装好的插件

// if (window.__POWERED_BY_WUJIE__) {
//   let instance
//   window.__WUJIE_MOUNT = () => {
//     const router = createRouter({ history: createWebHistory(), routes })
//     instance = createApp(App)
//     instance.use(router)
//     instance.mount('#app')
//   }
//   window.__WUJIE_UNMOUNT = () => {
//     instance.unmount()
//   }
// } else {
//   createApp(App)
//     .use(createRouter({ history: createWebHistory(), routes }))
//     .mount('#app')
// }
