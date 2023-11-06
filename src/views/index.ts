const routerComponents = {
  Users: () => import('./UserManger.vue'),
  Menus: () => import('./MenuManager.vue'),
  Auths: () => import('./AuthManager.vue')
}

export default routerComponents
