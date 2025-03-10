import type { MicroAppStateActions } from 'qiankun'
import { registerMicroApps, initGlobalState, start } from 'qiankun'

// 初始化state
const actions: MicroAppStateActions = initGlobalState({
  user: 'qiankun',
})
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('main', state, prev)
})
// actions.setGlobalState({
//   user: 'qiankun3',
// })
// actions.offGlobalStateChange()

registerMicroApps([
  {
    name: 'vue-app1',
    entry: 'http://localhost:5201/',
    container: '#qk-container',
    activeRule: '/qiankun/:id',
    props: {
      age: '25',
    },
  },
])

export const setupQiankun = () => {
  start()
}
