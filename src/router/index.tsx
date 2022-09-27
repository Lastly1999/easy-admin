import { BrowserRouter, Route, Routes } from 'react-router-dom'
import history from './history'
import Login from '../views/Common/Login'
import AppLayout from '@/layout/AppLayout/AppLayout'
import CustomRouter from './CustomRouter'

const AppRouter = () => {
  return (
    <CustomRouter history={history}>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/shared" element={<AppLayout />}></Route>
      </Routes>
    </CustomRouter>
  )
}

export default AppRouter
