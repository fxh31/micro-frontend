import { defineStore } from 'pinia'
import TestIframe from '@/components/TestIframe.vue'

export const useMultipleTabStore = defineStore('multipleTab', {
  state: () => {
    return {
      componentList: [],
    }
  },
  getters: {
    getComponentList() {
      return this.componentList
    },
    getCount() {
      return this.componentList.length
    },
  },
  actions: {
    addComponent(view) {
      this.componentList.push(view)
    },
  },
})
