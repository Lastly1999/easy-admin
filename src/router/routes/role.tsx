import AppLayout from '@/layout/AppLayout/AppLayout'
import MenuManage from '@/views/Common/Role/MenuManage/MenuManage'
import UserManage from '@/views/Common/Role/UserManage/UserManage'
import RoleManage from '@/views/Common/Role/RoleManage/RoleManage'
import type { RouteObject } from 'react-router-dom'

const roleRoutes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      {
        path: '/auth/menu',
        element: <MenuManage />
      },
      {
        path: '/auth/role',
        element: <RoleManage />
      },
      {
        path: '/auth/user',
        element: <UserManage />
      }
    ]
  }
]

export default roleRoutes
