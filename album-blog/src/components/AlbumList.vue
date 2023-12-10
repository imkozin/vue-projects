<template>
    <div class="user-album__page">
        <h2 class="user-album__page-title">User Albums:</h2>
    <div v-for="album in userAlbums(id)" :key="album.id" class="user-album__page-container">
      <v-card elevation="24" max-width="444" class="mx-auto">
        <v-system-bar lights-out></v-system-bar>
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          :show-arrows="false"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="300"
        >
          <v-carousel-item v-for="photo in getPhotosByAlbumId(album.id)" :key="photo.id">
            <v-img :src="photo.thumbnailUrl" :alt="photo.url"/>
          </v-carousel-item>
        </v-carousel>
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="`https://i.pravatar.cc/300?img=${id}`"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ album.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

    export default {
        props: {
            // userAlbums: {
            //     type: Object,
            //     required: true
            // },
            // photos: {
            //     type: Object,
            //     required: true
            // },
            id: {
                type: Number,
                required: true
            }
        },
        computed: {
            ...mapGetters(['userAlbums', 'getPhotosByAlbumId']),
        },
    }
</script>

<style lang="scss" scoped>
.user-album__page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    &-title {
        text-align: center;
    }
}
</style>