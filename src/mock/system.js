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
        componentName: 'Users'
      },
      {
        path: '/home/menus',
        name: 'menus',
        title: '菜单管理',
        componentName: 'Menus'
      },
      {
        path: '/home/auths',
        name: 'auths',
        title: '角色管理',
        componentName: 'Auths'
      }
    ]
  }
]
export default systems
