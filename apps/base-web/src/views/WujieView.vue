<template>
  <!--
   sync：开启路由同步模式，路由同步模式，开启后无界会将子应用的name作为一个url查询参数，实时同步子应用的路径作为这个查询参数的值，这样分享 URL 或者刷新浏览器子应用路由都不会丢失。
   alive：保活模式
   -->
  <WujieVue
    width="100%"
    height="100%"
    name="xxx"
    :url="route.meta.wujieUrl"
    :sync="true"
    :alive="true"
    :props="state"
  ></WujieVue>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
defineOptions({
  name: 'WujieView',
})
defineProps({
  msg: {
    type: String,
    default: '',
  },
})
const route = useRoute()
const router = useRouter()

const state = reactive({
  name: 'base-web',
  parent: 'hello parent',
  jump: (data) => {
    console.log(data, 'parent jump')
    // router.push(data)
  },
})
</script>

<style scoped></style>
