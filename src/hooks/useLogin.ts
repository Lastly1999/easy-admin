import { useState } from 'react'

const useLogin = () => {
  const [loginForm, setLoginForm] = useState()

  const handleLogin = (e: any) => {
    console.log('log')
  }

  return {
    loginForm,
    handleLogin
  }
}

export default useLogin
