<template>
  <div class="iframe-wrapper" :class="{ active: isActive }">
    <iframe
      :src="src"
      :key="iframeKey"
      ref="iframeRef"
      style="border: 0px"
      width="100%"
      height="100%"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  src: String,
  iframeKey: String, // 唯一标识
  isActive: Boolean, // 是否当前激活（用于 Iframe 保活）
})

const iframeRef = ref(null)

// 保活逻辑：隐藏时冻结 iframe 活动
// watch(
//   () => props.isActive,
//   (active) => {
//     const iframeWindow = iframeRef.value?.contentWindow
//     if (iframeWindow) {
//       iframeWindow.postMessage(
//         {
//           type: active ? 'RESUME' : 'PAUSE',
//         },
//         '*',
//       )
//     }
//   },
// )
</script>

<style>
.iframe-wrapper {
  /* position: fixed;
  top: 100px;
  left: 400px; */
  /* height: calc(100% - 120px); */
  /* width: calc(100% - 277px); */
  height: 280px;
  visibility: hidden;
  opacity: 0;
  /* transition: opacity 0.3s; */
}

.iframe-wrapper.active {
  visibility: visible;
  opacity: 1;
}
</style>
