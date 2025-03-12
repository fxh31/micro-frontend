<template>
  <div class="container">
    <div class="container-btn">
      <!-- <button @click="addComponent">添加组件</button> -->
      <input v-model="compName" />
    </div>

    <keep-alive>
      <component
        v-for="(component, index) in store.getComponentList"
        :key="component.name"
        :src="component.url"
        :isActive="getCurrentComp(component)"
        :is="component.comp"
      />
    </keep-alive>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import TestIframe from './TestIframe.vue'
import { useMultipleTabStore } from '@/store/modules/multopleTab'

const route = useRoute()

const store = useMultipleTabStore()

const components = reactive([])

const compName = ref('')
watch(route, (newV) => {
  compName.value = newV.name
})

const getCurrentComp = computed(() => {
  return (component) => {
    return component.name === compName.value
  }
})

const addComponent = () => {}
</script>

<style>
.container {
  /* align-items: center; */
}
.container-btn {
  /* flex-direction:  */
  height: 30px;
}
</style>
