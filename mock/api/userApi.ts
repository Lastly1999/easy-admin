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
          email: '1358826554@qq.com',
          departmentName: '哈哈哈',
          departmentId: 16,
          phone: '13159114911',
          remark: null,
          status: 1,
          userName: 'adminaaa',
          nickName: '13159114911',
          userId: 11,
          name: 'aaaa',
          headImg: null,
          createdAt: '2022-08-08T08:02:58.270Z',
          updatedAt: '2022-08-08T09:07:03.000Z',
          roles: [
            {
              roleId: 1,
              roleName: '超级管理员'
            }
          ]
        },
        {
          email: '12312',
          departmentName: '哈哈哈',
          departmentId: 16,
          phone: '1111',
          remark: null,
          status: 1,
          userName: '嗷尼玛1',
          nickName: '123123',
          userId: 12,
          name: '123123',
          headImg: null,
          createdAt: '2022-08-08T08:23:40.714Z',
          updatedAt: '2022-08-08T09:07:14.000Z',
          roles: [
            {
              roleId: 1,
              roleName: '超级管理员'
            }
          ]
        },
        {
          email: '1358826554@qq.com',
          departmentName: '测试部门2',
          departmentId: 17,
          phone: null,
          remark: null,
          status: 1,
          userName: 'admin33',
          nickName: '随便',
          userId: 13,
          name: '测试部门的新用户',
          headImg: null,
          createdAt: '2022-08-08T09:12:09.533Z',
          updatedAt: '2022-08-08T09:12:09.533Z',
          roles: [
            {
              roleId: 2,
              roleName: '新增的角色名称'
            }
          ]
        },
        {
          email: '1358826554@qq.com',
          departmentName: '哈哈哈',
          departmentId: 16,
          phone: '13159114911',
          remark: null,
          status: 1,
          userName: 'test1',
          nickName: 'aa',
          userId: 14,
          name: '刘婷',
          headImg: null,
          createdAt: '2022-08-08T09:13:30.539Z',
          updatedAt: '2022-08-08T09:13:30.539Z',
          roles: [
            {
              roleId: 1,
              roleName: '超级管理员'
            }
          ]
        },
        {
          email: '1358826554@qq.com',
          departmentName: '管理部门',
          departmentId: 2,
          phone: '13159114911',
          remark: null,
          status: 1,
          userName: 'string',
          nickName: '随便啊',
          userId: 4,
          name: 'stringaa',
          headImg: null,
          createdAt: '2022-07-26T18:02:39.320Z',
          updatedAt: '2022-08-09T05:10:13.000Z',
          roles: [
            {
              roleId: 1,
              roleName: '超级管理员'
            },
            {
              roleId: 2,
              roleName: '新增的角色名称'
            }
          ]
        },
        {
          email: '1358826554@qq.com',
          departmentName: '管理部门',
          departmentId: 2,
          phone: '1',
          remark: null,
          status: 1,
          userName: 'adminss',
          nickName: '昵称',
          userId: 9,
          name: '测试一下',
          headImg: null,
          createdAt: '2022-08-08T07:14:39.759Z',
          updatedAt: '2022-08-09T05:10:18.000Z',
          roles: [
            {
              roleId: 1,
              roleName: '超级管理员'
            },
            {
              roleId: 2,
              roleName: '新增的角色名称'
            }
          ]
        },
        {
          email: 'aaaa',
          departmentName: '管理部门',
          departmentId: 2,
          phone: '13159114911',
          remark: null,
          status: 1,
          userName: 'asdasd',
          nickName: 'aaa',
          userId: 8,
          name: 'asdassd',
          headImg: null,
          createdAt: '2022-08-08T07:12:57.623Z',
          updatedAt: '2022-08-09T05:10:21.000Z',
          roles: [
            {
              roleId: 1,
              roleName: '超级管理员'
            },
            {
              roleId: 2,
              roleName: '新增的角色名称'
            }
          ]
        },
        {
          email: '1358826554@qq.com',
          departmentName: '测试部门2',
          departmentId: 17,
          phone: '13159114911',
          remark: null,
          status: 1,
          userName: '我擦',
          nickName: 'aaa',
          userId: 15,
          name: 'asdsad',
          headImg: null,
          createdAt: '2022-08-09T05:50:25.850Z',
          updatedAt: '2022-08-09T05:50:25.850Z',
          roles: [
            {
              roleId: 1,
              roleName: '超级管理员'
            }
          ]
        },
        {
          email: '1358826554@qq.com',
          departmentName: '管理部门',
          departmentId: 2,
          phone: '13159114911',
          remark: null,
          status: 1,
          userName: 'superadmin',
          nickName: 'superadmin',
          userId: 16,
          name: 'erp',
          headImg: null,
          createdAt: '2022-08-20T11:20:25.382Z',
          updatedAt: '2022-08-20T11:20:25.382Z',
          roles: [
            {
              roleId: 12,
              roleName: 'super'
            }
          ]
        }
      ])
    }
  }
] as MockMethod[]
