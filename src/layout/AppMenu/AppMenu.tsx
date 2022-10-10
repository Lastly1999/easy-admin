import { fetchSystemAuthMenus } from '@/redux/features/authSlice'
import { useAppDispatch, useAppSelector } from '@/redux/redux'
import { Menu, MenuProps } from 'antd'
import React, { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AppMenu: React.FC = () => {
  const dispatch = useAppDispatch()
  const authMenus = useAppSelector((state) => state.auth.menus)
  const navigate = useNavigate()
  useLayoutEffect(() => {
    dispatch(fetchSystemAuthMenus())
  }, [])
  const goPath: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }
  return <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/workbench']} items={authMenus} onSelect={goPath} />
}

export default AppMenu
