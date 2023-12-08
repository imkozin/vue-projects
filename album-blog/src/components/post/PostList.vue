<template>
    <div class="user-post__page">
      <h2 class="user-post__page-title">User Posts:</h2>
      <PostForm @addPost="addPost" :id="id"/>
      <div v-for="post in $store.getters.getAllPosts(id)" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
</template>

<script>
import PostForm from '@/components/post/PostForm.vue';
    export default {
        components: {
            PostForm
        },
        props: {
            // posts: {
            //     type: Object,
            //     required: true
            // },
            id: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
.user-post__page {
    &-title {
        text-align: center;
    }
}
</style>