import type { MockMethod } from 'vite-plugin-mock'
import { success } from '../common'

export default [
  {
    url: '/api/auth/menus',
    method: 'get',
    response: ({ body }) => {
      const deps = [
        {
          createdAt: '2020-09-07T21:31:32.426Z',
          updatedAt: '2020-10-06T20:25:31.000Z',
          id: 2,
          parentId: 0,
          name: '管理部门',
          orderNum: 0,
          children: [
            {
              createdAt: '2022-08-08T07:50:53.453Z',
              updatedAt: '2022-08-08T07:50:53.453Z',
              id: 15,
              parentId: 2,
              name: '没啥东西的部门',
              orderNum: 2
            }
          ]
        },
        {
          createdAt: '2022-08-08T07:59:54.634Z',
          updatedAt: '2022-08-08T07:59:54.634Z',
          id: 16,
          parentId: 0,
          name: '哈哈哈',
          orderNum: 0,
          children: [
            {
              createdAt: '2022-08-09T05:23:47.632Z',
              updatedAt: '2022-08-09T05:23:47.632Z',
              id: 18,
              parentId: 16,
              name: 'aaadsa',
              orderNum: 16
            }
          ]
        },
        {
          createdAt: '2022-08-08T09:11:41.671Z',
          updatedAt: '2022-08-08T09:11:41.671Z',
          id: 17,
          parentId: 0,
          name: '测试部门2',
          orderNum: 0,
          children: []
        }
      ]

      return success(deps)
    }
  }
] as MockMethod[]
