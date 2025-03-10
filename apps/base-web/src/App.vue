<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>base</h1>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/iframe/1">Iframe</RouterLink>
        <!-- <RouterLink to="/wujie/wujie1">wujie</RouterLink> -->
        <RouterLink to="/qiankun/q1">qiankun</RouterLink>
      </nav>
    </div>
  </header>
  <div>
    <RouterView />
    <RouterView name="micro" v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
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
