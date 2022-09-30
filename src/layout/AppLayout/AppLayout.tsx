import React from 'react'
import { Layout, Breadcrumb } from 'antd'
import { Outlet } from 'react-router-dom'
import AppMenu from '../AppMenu/AppMenu'
import AppHeaderTools from '../AppHeaderTools/AppHeaderTools'

import Logo from '@/assets/logo.png'
import './AppLayout.less'

const { Header, Content } = Layout

interface AppLayoutProps {
  children?: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = () => {
  return (
    <Layout className="app-layout-container">
      <Header className="app-layout-header">
        <div className="header-left-content">
          <div className="logo">
            <img width={65} height={65} src={Logo} />
            <div className="app-title">EasyAdmin</div>
          </div>
          <AppMenu />
        </div>
        <AppHeaderTools />
      </Header>
      <Layout>
        <Layout style={{ backgroundColor: '#fff' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content className="site-layout-background">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AppLayout
