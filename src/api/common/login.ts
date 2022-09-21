import httpRequest from '@/utils/axios/httpRequest'

export const login = (data: any) => {
  return httpRequest.post('/api/login', data)
}
