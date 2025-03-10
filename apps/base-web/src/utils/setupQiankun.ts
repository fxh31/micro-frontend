import type { MicroAppStateActions } from 'qiankun'
import { registerMicroApps, initGlobalState, start } from 'qiankun'

// 初始化state
export const actions: MicroAppStateActions = initGlobalState({
  user: 'qiankun',
})
// 监听state变化
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('main', state, prev)
})

// actions.offGlobalStateChange()

export const setupQiankun = () => {
  start()
}
