import { markRaw } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import TestIframe from '@/components/TestIframe.vue'
import { useMultipleTabStore } from '@/store/modules/multopleTab'

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
        url: 'http://localhost:5201',
        // // 动态生成 iframe 的配置
        // iframeConfig: (route) => ({
        //   url: `http://localhost:5201/${route.params.id}`, // 动态 URL
        //   key: `user_${route.params.id}`, // 唯一标识（必须唯一）
        // }),
      },
      props: true,
    },
    {
      path: '/iframealive2',
      name: 'iframeAlive2',
      meta: {
        url: 'http://localhost:3100',
      },
      props: true,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const store = useMultipleTabStore()
  const component = {
    name: to.name,
    url: to.meta.url,
    comp: markRaw(TestIframe),
  }
  const n = store.getComponentList.filter((item) => item.name === to.name).length
  if (n) {
  } else {
    store.addComponent(component)
  }
  next()
})

export default router
