<template>
  <div>
    <h1>Page of {{ user.name }}</h1>
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
      user: []
    };
  },
   computed: { 
    ...mapGetters(['getPhotosByAlbumId']),
  },
  mounted() {
    this.fetchPosts();
    this.fetchAlbums();
    this.fetchPhotos();
    this.fetchUser();
  },
  methods: {
    ...mapActions(['fetchPosts', 'fetchAlbums', 'fetchPhotos']),
    async fetchUser() {
      try {
        const response = await this.axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`);
        this.user = response.data;
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
/* Your styles go here */
</style>
