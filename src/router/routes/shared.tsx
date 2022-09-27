import AppLayout from '@/layout/AppLayout/AppLayout'
import Shared from '@/views/Common/Shared/Shared'
import type { RouteObject } from 'react-router-dom'

const sharedRoutes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      {
        path: '/shared',
        element: <Shared />
      }
    ]
  }
]

export default sharedRoutes
