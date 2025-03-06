<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

function toLogin() {
  // window.open('http://localhost:5173/about')
  // window.location.href = 'http://localhost:5173/about' // 原地
  // window.location.replace('http://localhost:5173/about') // 原地
  const key = window.localStorage.getItem('baseKey')
  console.log(key)
}

function toBasePostMessage() {
  window.top.postMessage(
    {
      name: 'dd',
      redirectUrl: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage',
    },
    'http://localhost:5173/',
  )
}

function toBaseLogin() {
  const props = window.$wujie?.props // {data: xxx, methods: xxx}
  window.$wujie?.bus.$emit('tologin', 'm111')
}

const count = ref(1)
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/h">Home</RouterLink>
        <RouterLink to="/about1">About</RouterLink>
        <!-- <button @click="toBasePostMessage">to login</button> -->
        <!-- <a href="http://localhost:5173/about" target="">base about</a> -->
      </nav>
    </div>
  </header>

  <!-- <RouterView /> -->
  <div style="margin-left: 15rem">
    <p>
      {{ count }}
    </p>
    <button @click="count++">count++</button>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
