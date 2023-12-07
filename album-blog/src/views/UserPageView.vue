<template>
  <div>
    <h1>User {{ id }}</h1>
    <PostForm @addPost="addPost" :id="id"/>
    <PostList :posts="posts" :id="id"/>
    <AlbumList :albums="albums" :photos="photos" :id="id"/>
</div>
</template>

<script>
import PostForm from '@/components/post/PostForm.vue';
import PostList from '@/components/post/PostList.vue';
import AlbumList from '@/components/AlbumList.vue'
import {mapActions, mapGetters} from 'vuex';

export default {
  components: {
    PostForm, PostList, AlbumList
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
   computed: { 
    ...mapGetters(['getPhotosByAlbumId']),
  },
  mounted() {
    this.fetchPosts();
    this.fetchAlbums();
    this.fetchPhotos();
  },
  methods: {
    ...mapActions(['fetchPosts', 'fetchAlbums', 'fetchPhotos']),
  },

};
</script>

<style lang="scss" scoped>
/* Your styles go here */
</style>
