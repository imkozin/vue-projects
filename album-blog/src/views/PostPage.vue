<template>
  <div class="post-page">
    <h1 class="post-page__title">Posts of {{ user.name }}</h1>
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
    ...mapActions(['fetchPosts']),
    async fetchUser() {
      try {
        const response = await this.axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`);
        this.user = response.data;
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.post-page {
  &__title {
    text-align: center;
  }
}
</style>
