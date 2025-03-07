<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>default router view</h3>
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
