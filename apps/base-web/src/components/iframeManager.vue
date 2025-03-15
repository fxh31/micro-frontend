<!-- IframeManager.vue -->
<template>
  <!-- 所有缓存的 iframe -->
  <div class="iframe-manager">
    <iframe
      v-for="config in cachedIframes"
      :key="config.key"
      :src="config.url"
      :data-active="isActive(config.key)"
      :style="getIframeStyle(config.key)"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const MAX_CACHE = 5 // 最大缓存数
const cachedIframes = ref([]) // 缓存池 [{ url, key }]
const router = useRouter()
const route = useRoute()

// 当前路由对应的 iframe 配置
const currentIframeConfig = computed(() => {
  console.log(router)
  const routeConfig = router.currentRoute.value
  console.log(routeConfig)
  return routeConfig.meta?.iframeConfig?.(route)
})

// 判断 iframe 是否当前激活
const isActive = (key) => key === currentIframeConfig.value?.key

// iframe 样式：仅激活的可见
const getIframeStyle = (key) => ({
  display: isActive(key) ? 'block' : 'none',
})

// 更新缓存池
watch(
  () => route.fullPath,
  () => {
    debugger
    console.log(currentIframeConfig.value)
    if (!currentIframeConfig.value) return
    // 查找是否已缓存
    const index = cachedIframes.value.findIndex(
      (item) => item.key === currentIframeConfig.value.key,
    )
    debugger

    // 新增缓存项
    if (index === -1) {
      cachedIframes.value.push(currentIframeConfig.value)
      // 移除超出缓存的旧项
      if (cachedIframes.value.length > MAX_CACHE) {
        cachedIframes.value.shift()
      }
    } else {
      // 更新访问顺序：将当前项移至末尾（模拟 LRU）
      const [existing] = cachedIframes.value.splice(index, 1)
      cachedIframes.value.push(existing)
    }
  },
  { immediate: true },
)
</script>

<style>
.iframe-manager iframe {
  width: 100%;
  height: 100%;
  border: none;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
