import { MockMethod } from 'vite-plugin-mock'
import { error, success } from '../common'

export default [
  {
    url: '/api/auth/login',
    method: 'post',
    response: ({ body }) => {
      const { userName, passWord } = body
      if (userName === 'admin' && passWord === '1234') {
        return success({ token: '1234567890' })
      }
      return error('登陆失败')
    }
  }
] as MockMethod[]
