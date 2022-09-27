import { RouteObject, useRoutes } from 'react-router-dom'
import history from './history'
import Login from '@/views/Common/Login'
import CustomRouter from './CustomRouter'

const appImportRoutes = import.meta.glob('./routes/*.tsx', { eager: true })

const moduleRoutes: RouteObject[] = []
Object.values(appImportRoutes).forEach((val: any) => {
  const mod = val['default']
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  moduleRoutes.push(...modList)
})

const AppRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />
  },
  ...moduleRoutes
]

/**
 * 生成app路由栈
 */
const GenAppRouter = () => {
  const routes = useRoutes(AppRoutes)
  return routes
}

const AppRouter = () => {
  return (
    <CustomRouter history={history}>
      <GenAppRouter />
    </CustomRouter>
  )
}

export default AppRouter
