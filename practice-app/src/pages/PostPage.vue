<template>
  <div >
    <h1>Posts Page</h1>
    <MyInput v-model="searchQuery" placeholder="Search" v-focus/>
    <div class="app__btns">
      <MyButton @click="showDialog">Create Post</MyButton>
      <MySelect v-model="selectedSort" :options="sortOptions"/>
    </div>
    <MyDialog v-model:show="dialogVisible"><PostForm @create="createPost"/></MyDialog>
    <PostList :posts="sortedAndSearchedPosts" @remove="removePost"
    v-if="!isPostLoading"/>
    <div v-else>Loading Posts...</div>
    <div v-intersection="loadMorePosts" class="observer">

    </div>
    <!-- <div class="page__wrapper">
      <div v-for="pageNum in totalPages" :key="pageNum" class="page" :class="{'current-page': page === pageNum}" @click="changePage(pageNum)">
        {{ pageNum }}
      </div>
    </div> -->
  </div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import axios from 'axios'

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      sortOptions: [
        {value : 'title', name: 'By title'},
        {value: 'body', name: 'By description'}
      ],
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0
    }
  },
  methods: {
    createPost(post) {
        this.posts.push(post)
        this.dialogVisible = false
    },
    removePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
        this.dialogVisible = true
    },
    async fetchPosts() {
        try {
          this.isPostLoading = true
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          })
          this.totalPages = Math.ceil(res.headers['x-total-count'] / this.limit)
          this.posts = res.data
          this.isPostLoading = false
        } catch(e) {
            alert('Error')
        }
    },
    async loadMorePosts() {
        try {
          this.page += 1
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          })
          this.totalPages = Math.ceil(res.headers['x-total-count'] / this.limit)
          this.posts = [...this.posts, ...res.data]
        } catch(e) {
            alert('Error')
        }
    },
    // changePage(pageNum) {
    //   this.page = pageNum
    // }
  },
  mounted() {
      this.fetchPosts()
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      )
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    
    // page() {
    //   this.fetchPosts()
    // }
    // selectedSort(newValue) {
    //   this.posts.sort((post1, post2) => {
    //     return post1[newValue]?.localeCompare(post2[newValue])
    //   })
    // }
  }
}
</script>

<style scoped>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  cursor: pointer;
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background: teal;
}
</style>
