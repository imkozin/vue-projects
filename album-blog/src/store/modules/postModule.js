import axios from "axios";

export default {
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    addPost(state, post) {
      state.posts.unshift(post)
    },
  },
  actions: {
    async fetchPosts(context) {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        )
        context.commit('setPosts', response.data)
      } catch (err) {
        console.error('Error fetching posts:', err)
      }
    },
    async addPost(context, post) {
      const res = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        { post }
      )

      context.commit('addPost', post)
    },
  },
  getters: {
    getAllPosts: (state) => (userId) => {
      return state.posts.filter((post) => post.userId == userId)
    },
  },
}