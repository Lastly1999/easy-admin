import { MockMethod } from 'vite-plugin-mock'
import { success } from '../common'

interface UserList {
  userId: number
  departmentName: string
  departmentId: number
  name: string
  email: string
  userName: string
  nickName: string
  headImg: string
  phone: string
  remark: string
  status: number
  createdAt: Date
  updatedAt: Date
  roles: { roleId: number; roleName: string }[]
}

export default [
  {
    url: '/api/user',
    method: 'post',
    response: ({ body }) => {
      return success([
        {
          userId: 1,
          departmentName: '技术部',
          departmentId: '1',
          name: '',
          email: '',
          userName: 'string',
          nickName: 'string',
          headImg: 'string',
          phone: 'string',
          remark: 'string',
          status: 1,
          roles: [
            {
              roleId: 1,
              roleName: 'string'
            }
          ]
        }
      ])
    }
  }
] as MockMethod[]
