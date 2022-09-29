import React, { useEffect } from 'react'
import { Table } from 'antd'
import useSharedTable from '@/hooks/useSharedTable'
import { getSystemUsers } from '@/api/common/user'

const UserManage: React.FC = () => {
  const { dataSource } = useSharedTable({ requestMethod: getSystemUsers, params: {}, pager: { pageSize: 10, pageNo: 1 } })

  useEffect(() => {
    console.log(dataSource)
  }, [])
  const columns = []
  return (
    <div>
      <Table></Table>
    </div>
  )
}

export default UserManage
