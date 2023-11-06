import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import routerComponents from '@/views/index'
import useUserStore from '@/store/user'

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
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const UserStore = await useUserStore()
  console.log(UserStore.menus)
  if (UserStore.menus) {
    UserStore.menus.forEach(item => {
      console.log(item)
      router.addRoute('home', item)
    })
    console.log(router)
    next()
  }
  next()
})

export default router
