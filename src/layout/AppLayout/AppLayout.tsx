import React, { useLayoutEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import type { MenuProps } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSystemAuthMenus } from '@/redux/features/authSlice'
import { RootState } from '@/redux/redux'
import Logo from '@/assets/logo.png'
import './AppLayout.less'
import { useNavigate, Outlet } from 'react-router-dom'

const { Header, Content } = Layout

interface AppLayoutProps {
  children?: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = (props) => {
  const dispatch = useDispatch()
  const authMenus = useSelector((state: RootState) => state.auth.menus)
  const navigate = useNavigate()
  useLayoutEffect(() => {
    dispatch(fetchSystemAuthMenus() as any)
  }, [])

  const goPath: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }

  console.log(props)

  return (
    <Layout className="app-layout-container">
      <Header className="app-layout-header">
        <div className="logo">
          <img width={50} src={Logo} />
          <div className="app-title">EasyAdmin</div>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/workbench']} items={authMenus} onSelect={goPath} />
      </Header>
      <Layout>
        <Layout style={{ padding: '0 24px 24px', backgroundColor: '#fff' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content className="site-layout-background">
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AppLayout
