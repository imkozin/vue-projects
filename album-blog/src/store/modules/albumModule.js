import axios from 'axios'

export default {
  state: {
    albums: [],
    photos: [],
  },
  mutations: {
    setAlbums(state, payload) {
      state.albums = payload
    },
    setPhotos(state, payload) {
      state.photos = payload
    },
  },
  actions: {
    async fetchAlbums(context) {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/albums'
        )
        context.commit('setAlbums', response.data)
      } catch (error) {
        console.error('Error fetching albums:', error)
      }
    },
    async fetchPhotos(context) {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/photos'
        )
        context.commit('setPhotos', response.data)
      } catch (error) {
        console.error('Error fetching photos:', error)
      }
    },
  },
  getters: {
    getPhotosByAlbumId: (state) => (albumId) => {
      const albumPhotos = state.photos.filter(
        (photo) => photo.albumId == albumId
      )
      return albumPhotos.slice(0, 5)
    },
    userAlbums: (state) => (userId) => {
      return state.albums.filter((album) => album.userId == userId)
    },
  },
}
