<script setup lang="ts">
import { actions } from '@/utils/setupQiankun'
defineProps<{
  id: string
}>()

const changeState = () => {
  actions.setGlobalState({
    user: 'main3',
  })
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ id }}</h1>
    <h3>base view</h3>
    <button @click="changeState">change state by main</button>
  </div>
</template>

<style scoped>
.greetings {
  display: flex;
}
h3 {
  margin-top: 15px;
}
</style>
