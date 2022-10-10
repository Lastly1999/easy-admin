import { RootState, useAppSelector } from '@/redux/redux'
import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'

const AuthProvider: React.FC = () => {
  const accessToken = useAppSelector((state: RootState) => state.auth.accessToken)
  const location = useLocation()
  console.log(location.pathname)
  return accessToken && location.pathname !== '/' ? <Outlet /> : <Navigate replace to="/login" />
}

export default AuthProvider
