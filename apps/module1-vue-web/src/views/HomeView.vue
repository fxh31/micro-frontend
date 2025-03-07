<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const props = defineProps({
  moduleUser: String,
})
const route = useRoute()
const count = ref(0)

console.log(window.$wujie.props)
const jump = () => {
  window.$wujie.props.jump(`${route.path}/home`)
}
</script>

<template>
  <main>
    module1 home，hi {{ moduleUser }}
    <div style="margin-left: 15rem">
      <p>
        {{ count }}
      </p>
      <button @click="count++">count++</button>
      <button @click="jump">control base web jump</button>
    </div>
  </main>
</template>
