export interface SystemDepartmentInfo {
  createdAt: string
  updatedAt: string
  id: number
  parentId: number
  name: string
  orderNum: number
  children: SystemDepartmentInfo[]
}
