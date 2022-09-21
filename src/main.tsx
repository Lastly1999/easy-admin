import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './views/Common/Login'
import { ConfigProvider } from 'antd'

const Main: React.FC = () => {
  ConfigProvider.config({
    theme: { primaryColor: '#2905c4' }
  })

  return (
    <ConfigProvider>
      <AppRouter></AppRouter>
    </ConfigProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />)
