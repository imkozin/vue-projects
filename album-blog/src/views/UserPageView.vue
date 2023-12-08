<template>
  <div class="user-page">
    <div class="user-page__info">
        <h1>{{ user.name }}</h1>
    </div>
    <PostList :posts="posts" :id="id"/>
    <AlbumList :albums="albums" :photos="photos" :id="id"/>
</div>
</template>

<script>
import PostList from '@/components/post/PostList.vue';
import AlbumList from '@/components/AlbumList.vue'
import {mapActions, mapGetters} from 'vuex';

export default {
  components: {
    PostList, AlbumList
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
.user-page {
  display: grid;
  grid-template-columns: 1fr 1fr;  

  &__info {
    grid-column: span 2;  
    text-align: center;  
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
}
</style>
