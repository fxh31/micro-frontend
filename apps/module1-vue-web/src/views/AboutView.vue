<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <p>子应用取消主应用的事件监听</p>
      <button @click="cancelEvent">cancel</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const offEvent = inject('offEvent')

function cancelEvent() {
  offEvent()
}
</script>

<style></style>
