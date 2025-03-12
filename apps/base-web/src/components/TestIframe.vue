<template>
  <div class="iframe-wrapper" :class="{ active: isActive }">
    <iframe width="100%" height="100%" :src="src"></iframe>
    <div>
      <span>{{ count }}</span>
      <button @click="count++">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
const props = defineProps({
  src: String,
  iframeKey: String, // 唯一标识
  isActive: Boolean, // 是否当前激活（用于 Iframe 保活）
})
const count = ref(0)
console.log(props)
</script>

<style>
.iframe-wrapper {
  width: 650px;
  height: 300px;
  position: fixed;
  visibility: hidden;
  opacity: 0;
  top: 25px;
  left: 350px;
}
.iframe-wrapper iframe {
  width: 100%;
  /* width: calc(100% - 350px); */
  height: 300px;
  /* border: none; */
}
.active {
  visibility: visible;
  opacity: 1;
}
</style>
