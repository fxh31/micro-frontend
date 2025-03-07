<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()
console.log(route.params)
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
        <RouterLink to="/wujieUser1">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
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
</style>
