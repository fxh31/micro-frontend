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
        <RouterLink to="/iframe/user1">Iframe</RouterLink>
        <!-- <RouterLink to="/wujie/wujie1">wujie</RouterLink> -->
      </nav>
    </div>
  </header>
  <div>
    <RouterView />
    <router-view name="micro" />
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
