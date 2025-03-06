<template>
  <div class="iframe-box">
    <h1>This is an iframe page{{ count }}</h1>

    <IframeContainer
      v-if="route.meta.iframeUrl"
      :src="route.meta.iframeUrl"
      :iframe-key="route.name"
      :is-active="isCurrentRoute(route)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import IframeContainer from '@/components/IframeContainer.vue'

defineProps({
  count: {
    type: Number,
    default: 0,
  },
})

const route = useRoute()
const isCurrentRoute = (route) => {
  return route.meta?.iframeUrl
}
</script>

<style scoped>
h1 {
  padding: 0 18rem;
}
.iframe-box {
  margin-top: 5rem;
}
</style>
