import httpRequest from '@/utils/axios/httpRequest'

export const getSystemUsers = () => {
  return httpRequest.post('/user')
}
