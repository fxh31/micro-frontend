<script setup lang="ts">
import { onMounted } from 'vue'
import { actions } from '@/utils/setupQiankun'
// import { setupQiankun } from '@/utils/setupQiankun'
import { registerMicroApps, start } from 'qiankun'
defineProps<{
  id: string
}>()

const changeState = () => {
  actions.setGlobalState({
    user: 'main3',
  })
}
onMounted(() => {
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
  start()
})
</script>

<template>
  <div class="greetings">
    <div>
      <h1 class="green">{{ id }}</h1>
      <h3>base view</h3>
      <button @click="changeState">change state by main</button>
    </div>
    <div id="qk-container"></div>
  </div>
</template>

<style scoped>
.greetings {
  /* display: flex; */
}
h3 {
  margin-top: 15px;
}
</style>
