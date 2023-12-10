<template>
  <div class="album-page">
    <h1 class="album-page__title">Albums of {{ user.name }}</h1>
    <AlbumList :albums="userAlbums" :id="id"/>
  </div>
</template>

<script>
import AlbumList from '@/components/AlbumList.vue'
import { mapActions, mapGetters} from 'vuex'

export default {
  components: {
    AlbumList,
  },
  data() {
    return {
      id: this.$route.params.id,
      user: []
    }
  },
  mounted() {
    this.fetchAlbums();
    this.fetchUser();
  },
  methods: {
    ...mapActions(['fetchAlbums']),
    async fetchUser() {
      try {
        const response = await this.axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`);
        this.user = response.data;
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
  },
  computed: mapGetters(['userAlbums']),
}
</script>

<style lang="scss" scoped>
.album-page {
  &__title {
    text-align: center;
  }
}
</style>
