<template>
  <div class="container">
    <div class="container-btn">
      <button @click="addComponent">添加组件</button>
      <input v-model="compName" />
    </div>

    <keep-alive>
      <component
        v-for="(component, index) in components"
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
import TestIframe from './TestIframe.vue'

const components = reactive([
  {
    name: 'T1',
    comp: TestIframe,
    url: 'http://localhost:5201',
  },
])
const compName = ref('')

const getCurrentComp = computed(() => {
  return (component) => {
    return component.name === compName.value
  }
})

const addComponent = () => {
  components.push({
    name: 'T2',
    comp: TestIframe,
    url: 'http://localhost:3100',
  })
}
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
