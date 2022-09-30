import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined, SettingOutlined } from '@ant-design/icons'
import './AppHeaderTools.less'

const AppHeaderTools: React.FC = () => {
  return (
    <div className="app-header-tools">
      <div className="app-header-tools-item">
        <Avatar size={32} icon={<UserOutlined />} />
      </div>
      <div className="app-header-tools-item">
        <SettingOutlined style={{ fontSize: '18px' }} />
      </div>
    </div>
  )
}

export default AppHeaderTools
