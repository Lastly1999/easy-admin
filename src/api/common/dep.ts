import httpRequest from '@/utils/axios/httpRequest'
import type { SystemDepartmentInfo } from '../model/dep'

export const getSystemDeps = () => {
  return httpRequest.get<null, SystemDepartmentInfo[]>('/department')
}
