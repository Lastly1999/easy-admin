import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/auth/menus',
    method: 'get',
    response: ({ body }) => {
      const menus = [
        {
          key: '工作台',
          label: '/workbench'
        },
        {
          key: '/auth',
          label: '权限管理',
          children: [
            {
              key: '/auth/role',
              label: '角色管理'
            },
            {
              key: '/auth/user',
              label: '用户管理'
            },
            {
              key: '/auth/system',
              label: '系统菜单'
            }
          ]
        }
      ]
      return menus
    }
  }
] as MockMethod[]
