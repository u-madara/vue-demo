const systems = [
  {
    id: '1',
    path: '/home/system',
    name: 'system',
    title: '系统管理',
    redirect: '/home/users',
    children: [
      {
        path: '/home/users',
        name: 'users',
        title: '用户管理',
        components: 'routerComponents.Users'
      },
      {
        path: '/home/menus',
        name: 'menus',
        title: '菜单管理',
        components: 'routerComponents.Menus'
      },
      {
        path: '/home/auths',
        name: 'auths',
        title: '角色管理',
        components: 'routerComponents.Auths'
      }
    ]
  }
]
export default systems
