import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: HomeView,
    },
    {
      path: '/iframe/:count',
      name: 'iframe',
      component: () => import('../views/IframeView.vue'),
      meta: {
        iframeUrl: 'http://localhost:5174/',
      },
      props: true,
    },
    // {
    //   path: '/wujie/:msg',
    //   name: 'wujie',
    //   components: {
    //     default: () => import('../views/DefaultView.vue'),
    //     micro: () => import('../views/IframeView.vue'),
    //   },
    //   meta: {
    //     iframeUrl: 'http://localhost:5174/',
    //   },
    //   props: true,
    // },
  ],
})

export default router
