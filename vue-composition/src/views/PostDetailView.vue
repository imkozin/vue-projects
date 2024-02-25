<template>
  <div>
    <h1>This is Post Details Page</h1>
    <p>Display the content of post with ID of {{ $route.params.id }} here</p>
    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>
    <div>
      <button @click="goHomeIn3Sec">Go Home in 3 Seconds</button>
    </div>
    <RouterLink to="/posts">&lt; Back</RouterLink>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const showPostId = () => {
  alert(`The id of this post is ${route.params.id}`)
}

const goHomeIn3Sec = () => {
    setTimeout(() => {
        router.push({name: 'home'})
    }, 3000)
}
</script>

<style scoped></style>
