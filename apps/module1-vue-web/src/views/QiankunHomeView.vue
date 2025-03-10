<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'

defineProps({
  id: String,
})

const mainProps = inject('mainProps')
const sentMessage = () => {
  mainProps.setGlobalState({
    user: 'module2',
  })
}
onMounted(() => {})
</script>

<template>
  <div class="about">
    <h1>This is an qiankun page</h1>
    <p>{{ id }}</p>
    <button @click="sentMessage">sent message to base</button>
  </div>
</template>

<style></style>
