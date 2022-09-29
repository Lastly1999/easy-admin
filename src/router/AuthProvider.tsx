import { RootState, useAppSelector } from '@/redux/redux'
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const AuthProvider: React.FC = () => {
  const accessToken = useAppSelector((state: RootState) => state.auth.accessToken)
  return accessToken ? <Outlet /> : <Navigate replace to="/login" />
}

export default AuthProvider
