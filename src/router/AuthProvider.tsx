import { useAppSelector } from '@/hooks/redux'
import { RootState } from '@/redux/redux'
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const AuthProvider: React.FC = () => {
  const accessToken = useAppSelector((state: RootState) => state.auth.accessToken)
  return accessToken ? <Outlet /> : <Navigate replace to="/login" />
}

export default AuthProvider
