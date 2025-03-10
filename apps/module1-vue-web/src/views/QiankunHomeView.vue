<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  id: String,
})
</script>

<template>
  <div class="about">
    <h1>This is an qiankun page</h1>
    <p>{{ id }}</p>
  </div>
</template>

<style></style>
