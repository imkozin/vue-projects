<template>
  <div>
    <h1>User {{ id }}</h1>
    <PostList :posts="posts" :id="id"/>
  </div>
</template>

<script>
import PostList from '@/components/post/PostList.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    PostList,
  },
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  mounted() {
    this.fetchPosts()
  },
  methods: {
    ...mapActions(['fetchPosts'])
  }
}
</script>

<style lang="scss" scoped></style>
