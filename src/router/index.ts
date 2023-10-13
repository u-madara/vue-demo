import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/registry',
    name: 'registry',
    component: () => import('@/views/Registry.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
