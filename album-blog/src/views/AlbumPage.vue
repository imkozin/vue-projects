<template>
  <div>
    <h1>User {{ id }}</h1>
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
    }
  },
  mounted() {
    this.fetchAlbums()
  },
  methods: {
    ...mapActions(['fetchAlbums'])
  },
  computed: mapGetters(['userAlbums']),
}
</script>

<style lang="scss" scoped></style>
