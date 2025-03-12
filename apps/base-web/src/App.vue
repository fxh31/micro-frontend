<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import IframeManager from '@/components/IframeManager.vue'
import Test from '@/components/Test.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>base</h1>

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/iframe/1">Iframe</RouterLink>
      </nav> -->
    </div>
  </header>
  <div>
    <Test />
    <!-- <RouterView /> -->
    <!-- <RouterView v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </RouterView> -->
  </div>
</template>

<style scoped>
.wrapper h1 {
  padding: 1rem;
  padding-top: 5rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
