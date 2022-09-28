import { RouteObject, useRoutes } from 'react-router-dom'
import history from './history'
import Login from '@/views/Common/Login/Login'
import CustomRouter from './CustomRouter'
import NoPermissions from '@/views/Common/NoPermissions/NoPermissions'
import AuthProvider from './AuthProvider'
import { getMetaGlobalFile } from './utils/getMetaGlobal'

const appImportRoutes = import.meta.glob('./routes/*.tsx', { eager: true })
const moduleRoutes = getMetaGlobalFile<RouteObject>(appImportRoutes)

const AppRoutes: RouteObject[] = [
  {
    path: '',
    element: <AuthProvider />,
    children: [...moduleRoutes]
  },
  {
    path: '*',
    element: <NoPermissions />
  },
  {
    path: '/login',
    element: <Login />
  }
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
