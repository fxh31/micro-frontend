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
      path: '/iframe/:num',
      name: 'iframe',
      component: () => import('../views/IframeView.vue'),
      meta: {
        iframeUrl: 'http://localhost:5201/',
      },
      props: true,
    },
    {
      path: '/iframealive',
      name: 'iframeAlive',
      meta: {
        // 动态生成 iframe 的配置
        iframeConfig: (route) => ({
          url: `http://localhost:5201/${route.params.id}`, // 动态 URL
          key: `user_${route.params.id}`, // 唯一标识（必须唯一）
        }),
      },
      props: true,
    },
  ],
})

export default router
