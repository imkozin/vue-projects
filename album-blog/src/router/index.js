import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('../views/UserPageView.vue'),
  },
  {
    path: '/user/:id/posts',
    name: 'posts',
    component: () => import('../views/PostPage.vue'),
  },
  {
    path: '/user/:id/albums',
    name: 'albums',
    component: () => import('../views/AlbumPage.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
