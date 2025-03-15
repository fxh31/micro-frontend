import { defineStore } from 'pinia'
import TestIframe from '@/components/TestIframe.vue'

const MAX_CACHE = 5

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
      if (this.getCount >= MAX_CACHE) {
        this.componentList.shift()
      }
      this.componentList.push(view)
    },
  },
})
