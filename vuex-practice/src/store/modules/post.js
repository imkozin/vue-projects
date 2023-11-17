export default {
  state: {
    posts: []
  },
  getters: {
    allPosts(state) {
        return state.posts
    },
    countPosts(state, getters) {
        return getters.validPost.length
    },
    validPost(state) {
        return state.posts.filter(post => {
            return post.title && post.body
        })
    }
  },
  mutations: {
    updatePosts(state, posts) {
        state.posts = posts
    },
    createPost(state, newPost) {
        state.posts.unshift(newPost)
    }
  },
  actions: {
    async fetchPosts({commit}, limit = 3) {
        const res = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
        )
        const posts = await res.json()

        commit('updatePosts', posts)
    }
  },
}