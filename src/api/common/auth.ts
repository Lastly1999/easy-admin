import httpRequest from '@/utils/axios/httpRequest'

export const getSystemMenus = () => {
  return httpRequest.get('/auth/menus')
}

export const login = (data: any) => {
  return httpRequest.post('/auth/login', data)
}
