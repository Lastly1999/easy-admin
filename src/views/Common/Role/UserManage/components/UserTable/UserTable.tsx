import React from 'react'
import { getSystemUsers } from '@/api/common/user'
import { ProColumns, ProTable } from '@ant-design/pro-components'
import { QuestionCircleOutlined, DownOutlined } from '@ant-design/icons'
import { Tooltip, Button, Space, Tag } from 'antd'

export type TableItemRoleInfo = {
  roleId: number
  roleName: string
}

export type TableListItem = {
  id: number
  depId: number
  name: string
  userName: string
  nickName: string
  headImg: string
  email: string
  phone: string
  remark: string
  status: number
  roles: TableItemRoleInfo[]
}

const UserTable: React.FC = () => {
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '用户名',
      width: 100,
      dataIndex: 'userName'
    },
    {
      title: '用户昵称',
      dataIndex: 'nickName',
      width: 130
    },
    {
      title: '状态',
      width: 120,
      dataIndex: 'status'
    },
    {
      title: '手机号',
      width: 150,
      dataIndex: 'phone'
    },
    {
      title: '角色',
      width: 220,
      dataIndex: 'roles',
      render: (_, record) => (
        <Space>
          {record.roles.map(({ roleName, roleId }) => (
            <Tag color="green" key={roleId}>
              {roleName}
            </Tag>
          ))}
        </Space>
      )
    },
    {
      title: (
        <>
          创建时间
          <Tooltip placement="top" title="这是一段描述">
            <QuestionCircleOutlined style={{ marginInlineStart: 4 }} />
          </Tooltip>
        </>
      ),
      width: 140,
      key: 'since',
      dataIndex: 'createdAt',
      valueType: 'date'
    },
    {
      title: '备注',
      dataIndex: 'remark',
      ellipsis: true,
      copyable: true
    },
    {
      title: '操作',
      width: 180,
      key: 'option',
      valueType: 'option',
      render: () => [<a key="link">编辑</a>, <a key="link2">删除</a>]
    }
  ]

  return (
    <div>
      <ProTable<TableListItem>
        columns={columns}
        request={(params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          console.log(params, sorter, filter)
          return getSystemUsers()
        }}
        rowKey="id"
        pagination={{
          showQuickJumper: true
        }}
        search={{
          optionRender: false,
          collapsed: false
        }}
        dateFormatter="string"
        headerTitle="用户列表"
        toolBarRender={() => [
          <Button key="show">查看日志</Button>,
          <Button key="out">
            导出数据
            <DownOutlined />
          </Button>,
          <Button type="primary" key="primary">
            创建应用
          </Button>
        ]}
      />
    </div>
  )
}

export default UserTable
