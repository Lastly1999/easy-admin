import { useState } from 'react'
import { login } from '@/api/common/auth'
import history from '@/router/history'

interface LoginForm {
  userName: string
  passWord: string
}

const useLogin = () => {
  const [loginForm, setLoginForm] = useState()

  const handleLogin = async (form: LoginForm) => {
    const { statusCode } = await login(form)
    statusCode === 200 && history.push('/shared')
  }

  return {
    loginForm,
    handleLogin
  }
}

export default useLogin
