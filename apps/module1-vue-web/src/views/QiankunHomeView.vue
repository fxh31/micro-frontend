<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps({
  id: String,
})

const sentMessage = () => {}
onMounted((props) => {
  console.log(props)
})
</script>

<template>
  <div class="about">
    <h1>This is an qiankun page</h1>
    <p>{{ id }}</p>
    <button @click="sentMessage">sent message to base</button>
  </div>
</template>

<style></style>
