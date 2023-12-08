<template>
  <div>
    <h1>Posts of {{ user.name }}</h1>
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
      user: []
    }
  },
  mounted() {
    this.fetchPosts();
    this.fetchUser()
  },
  methods: {
    ...mapActions(['fetchPosts'])
  }
}
</script>

<style lang="scss" scoped></style>
