<template>
  <div class="iframe-wrapper" :class="{ active: isActive }">
    <iframe width="100%" height="100%" :src="src" ref="iframeRef" :id="iframeKey"></iframe>
    <div>
      <span>{{ count }}</span>
      <p>id:{{ IframeId }}</p>
      <button @click="count++">+</button>
      <button @click="sendMessage()">send message</button>
      <!-- <button @click="getModuleInfo()">get module info</button> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, toRef } from 'vue'
import { CrossFrameEventBus } from '@repo/post-message-bus'
const props = defineProps({
  src: String,
  iframeKey: String, // 唯一标识
  isActive: Boolean, // 是否当前激活（用于 Iframe 保活）
})
const count = ref(0)

const IframeId = ref(props.iframeKey)

let mainBus = null
function initPostBus() {
  // 获取 iframe 的 contentWindow
  const iframe = document.querySelector(`#${props.iframeKey}`)
  const iframeWindow = iframe.contentWindow
  // 初始化总线（明确指定 targetOrigin）
  mainBus = new CrossFrameEventBus(
    iframeWindow, // 指定接收端端口
    'http://localhost:5201/', // 子项目域名（*：通配符）
    true, // 开启调试模式
  )
}

// 发送消息（触发指定事件监听器）
function sendMessage() {
  mainBus.emit('LOAD_CONFIG', { theme: 'dark', name: IframeId.value })
}

onMounted(() => {
  initPostBus()
})
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
