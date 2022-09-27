import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from '@/router'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import { store } from './redux/redux'

const Main: React.FC = () => {
  ConfigProvider.config({
    theme: { primaryColor: '#2905c4' }
  })

  return (
    <ConfigProvider>
      <Provider store={store}>
        <AppRouter></AppRouter>
      </Provider>
    </ConfigProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />)
