<template>
  <div class="user-data">{{ userData.name }} @{{ userData.username }}</div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
  </nav>
  <!-- <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view> -->
  <RouterView></RouterView>
</template>

<script setup>
import { reactive, provide } from 'vue'

const userData = reactive({
  name: 'Ivan',
  username: 'ivanko',
})

provide('userData', userData)
</script>

<style>
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

.user-data {
  position: absolute;
  background: beige;
  top: 0;
  right: 0;
  font-size: 12px;
  padding: 5px;
}
</style>
