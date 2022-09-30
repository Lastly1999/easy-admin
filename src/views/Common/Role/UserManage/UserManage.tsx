import React from 'react'
import { ProCard } from '@ant-design/pro-components'
import UserTable from './components/UserTable/UserTable'
import DepartmentTree from './components/DepartmentTree/DepartmentTree'

const UserManage: React.FC = () => {
  return (
    <ProCard split="vertical">
      <ProCard colSpan="384px" ghost>
        <DepartmentTree />
      </ProCard>
      <ProCard>
        <UserTable />
      </ProCard>
    </ProCard>
  )
}

export default UserManage
