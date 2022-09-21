import type { IJsonResult } from '@/typings/global'
import HttpInterceptor from './interceptor'
import { notification } from 'antd'

type IHttpHeadersOptions = {
  [index: string]: any
}

/**
 * http request create for HttpInterceptor class instance
 */
const httpRequest = new HttpInterceptor({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: Number(import.meta.env.VITE_APP_TIME_OUT),
  interceptor: {
    requestInterceptors: (config) => {
      // const storeState = stores.getState()
      // const accessToken = storeState.authState.accessToken;
      // const refreshToken = storeState.authState.refreshToken;
      ;(config.headers as IHttpHeadersOptions)['authorization'] = ''
      ;(config.headers as IHttpHeadersOptions)['RefreshToken'] = ''
      return config
    },
    requestInterceptorsCatch: (eof) => eof,
    responseInterceptors: (response) => {
      if (response.data.statusCode !== 200) {
        handelApiError(response.data)
        throw new Error(response.data.msg)
      }
      return response
    },
    responseInterceptorsCatch: (eof) => {
      console.log(eof)
      if (eof.response.status === 401) {
        jwtInvalidHandler(eof.response.status)
      } else {
        handelHttpError(eof.response.data.message)
      }
      throw new Error(eof.response.data.msg)
    }
  }
})

const jwtInvalidHandler = (code: number) => {
  if (code === 401) {
    localStorage.removeItem('persist:root')
  }
}

const handelApiError = <T>(data: IJsonResult<T>) => {
  return notification.error({ message: '温馨提示', description: data.msg })
}

const handelHttpError = (description: string) => {
  return notification.error({ message: '温馨提示', description })
}

export default httpRequest
