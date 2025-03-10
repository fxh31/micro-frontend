import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/WujieHomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: import('../views/AboutView.vue'),
      props: true,
    },
    // {
    //   path: '/:moduleUser',
    //   name: 'home',
    //   component: HomeView,
    //   props: true,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    {
      path: '/qiankun/:id',
      name: 'qiankunHome',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/QiankunHomeView.vue'),
      props: true,
    },
  ],
})

export default router
