<template>
    <div class="user-post__page">
      <h2 class="user-post__page-title">User Posts:</h2>
      <PostForm @addPost="addPost" :id="id"/>
      <div v-for="post in $store.getters.getAllPosts(id)" :key="post.id" class="user-post__page-posts">
        <h3>{{ post.title }}</h3>
        <p class="">{{ post.body }}</p>
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
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &-title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  &-posts {
    margin-bottom: 20px;
    padding: 15px;
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  
  &-posts h3 {
    font-size: 18px;
    margin-bottom: 10px;

    &::first-letter {
        text-transform: capitalize;
    }
  }
  
  &-posts p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;

    &::first-letter {
        text-transform: capitalize;
    }
  }
}
</style>
