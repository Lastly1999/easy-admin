import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from '@/router'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/redux'
import { PersistGate } from 'redux-persist/integration/react'
import { SizeType } from 'antd/es/config-provider/SizeContext'

const Main: React.FC = () => {
  ConfigProvider.config({
    theme: { primaryColor: '#2905c4' }
  })
  const [componentSize, setComponentSize] = useState<SizeType>('middle')

  return (
    <ConfigProvider componentSize={componentSize}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter></AppRouter>
        </PersistGate>
      </Provider>
    </ConfigProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />)
