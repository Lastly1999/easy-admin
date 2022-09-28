import { useState } from 'react'
import { login } from '@/api/common/auth'
import history from '@/router/history'
import { useDispatch } from 'react-redux'
import { setToken } from '@/redux/features/authSlice'

interface LoginForm {
  userName: string
  passWord: string
}

const useLogin = () => {
  const [loginForm, setLoginForm] = useState()
  const dispatch = useDispatch()

  const handleLogin = async (form: LoginForm) => {
    const { statusCode, data } = await login(form)
    if (statusCode === 200) {
      dispatch(setToken(data.token))
      history.push('/shared')
    }
  }

  return {
    loginForm,
    handleLogin
  }
}

export default useLogin
