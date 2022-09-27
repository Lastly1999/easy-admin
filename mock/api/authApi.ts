import type { MockMethod } from 'vite-plugin-mock'
import { success } from '../common'

export default [
  {
    url: '/api/auth/menus',
    method: 'get',
    response: ({ body }) => {
      const menus = [
        {
          key: '/shared',
          label: '工作台'
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
              key: '/auth/menu',
              label: '系统菜单'
            }
          ]
        }
      ]
      return success(menus)
    }
  }
] as MockMethod[]
