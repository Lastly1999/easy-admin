import React from 'react'
import { Form, Button, Input, Checkbox } from 'antd'
// hooks
import useLogin from '@/hooks/useLogin'
import './index.less'

const Login: React.FC = () => {
  const { handleLogin } = useLogin()

  return (
    <div className="login-page-container">
      <Form className="login-page-form" initialValues={{ remember: true }} autoComplete="off" onFinish={handleLogin}>
        <p className="login-form-title">EasyAdmin</p>
        <Form.Item label="账号" name="userName" rules={[{ required: true, message: '' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="暗号" name="passWord" rules={[{ required: true, message: '' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Login
