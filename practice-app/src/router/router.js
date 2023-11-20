import Main from '@/pages/Main'
import About from '@/pages/About'
import PostPage from '@/pages/PostPage'
import PostPageWithStore from '@/pages/PostPageWithStore'
import PostPageComposition from '@/pages/PostPageComposition'
import PostIdPage from '@/components/PostIdPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostPage,
  },
  {
    path: '/posts/:id',
    component: PostIdPage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/store',
    component: PostPageWithStore,
  },
  {
    path: '/composition',
    component: PostPageComposition,
  },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router