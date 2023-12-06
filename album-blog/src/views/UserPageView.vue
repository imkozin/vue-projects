<template>
  <div>
    <h1>User {{ id }}</h1>
    <div v-for="album in userAlbums" :key="album.id">
      {{ album.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      albums: [],
    };
  },
  computed: {
    userAlbums() {
      // Filter albums based on the user's ID
      return this.albums.filter((album) => album.userId == this.id);
    },
  },
  created() {
    this.fetchAlbums();
  },
  methods: {
    async fetchAlbums() {
      try {
        const response = await this.axios.get('https://jsonplaceholder.typicode.com/albums');
        this.albums = response.data;
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* Your styles go here */
</style>
