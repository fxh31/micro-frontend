<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const props = defineProps({
  moduleUser: String,
  num: Number,
})
const route = useRoute()
const count = ref(0)

const wujie = window.$wujie
const jump = () => {
  if (wujie) {
    wujie.props.jump(`${route.path}/home`)
  }
}
// 子应用发送事件
const jumpByEvent = () => {
  if (wujie) {
    wujie.bus.$emit('routeChange', `${route.path}/home`)
  }
}

// 子应用监听事件
if (window.$wujie) {
  const setupEventListener = () => {
    window.$wujie.bus.$on('module1Change', (data) => {
      console.log('module1Change', data)
    })
  }
  setupEventListener()
}
</script>

<template>
  <main>
    module1 home，hi {{ moduleUser || num }}
    <div style="margin-left: 15rem">
      <p>
        {{ count }}
      </p>
      <button @click="count++">count++</button>
      <button @click="jump">control base web jump</button>
      <button @click="jumpByEvent">control base web jump by eventbus</button>
    </div>
  </main>
</template>
