<script setup lang="ts">
/***
 * iframe 实现保活：一次性将所有的 iframe 全部挂载到页面上，然后将根据当前路由的原信息匹配显示样式
 * 缺点：页面开销较大，特别当需要 iframe 的保活的页面变多之后
 */
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import IframeContainer from '@/components/IframeContainer.vue'

const route = useRoute()

// 显示当前 iframe 的样式
const isCurrentRoute = (targetRoute) => {
  return route.meta?.iframeKey === targetRoute.meta?.iframeKey
}
</script>

<template>
  <div class="iframe-box">
    <template v-for="routeItem in iframeRoutes" :key="route1.name">
      <IframeContainer
        v-if="routeItem.meta.iframeUrl"
        :src="routeItem.meta.iframeUrl"
        :iframe-key="routeItem.name"
        :is-active="isCurrentRoute(routeItem)"
      />
    </template>
  </div>
</template>

<style>
.iframe-box {
  margin-top: 20px;
}
</style>
