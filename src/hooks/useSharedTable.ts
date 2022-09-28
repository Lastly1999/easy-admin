import { useEffect, useState } from 'react'
import httpRequest from '@/utils/axios/httpRequest'

type SharedRequestMethod = 'get' | 'post' | 'patch' | 'delete'

interface SharedTableArgs<T> {
  pager: Pager
  params: T
  method: SharedRequestMethod
  reqeustUrl: string
}

interface Pager {
  pageSize: number
  pageNo: number
}

/**
 * 共享antd表格逻辑 hook
 * @returns
 */
const useSharedTable = <T>({ params, pager = { pageSize: 10, pageNo: 1 }, method = 'post', reqeustUrl = '' }: SharedTableArgs<T>) => {
  const [dataSource, setDataSource] = useState<any[]>()
  const [dataParams, setDataParams] = useState<T>(params)

  useEffect(() => {
    setDataParams(params)
    fetchData()
  }, [params, dataParams])

  const fetchData = async () => {
    const { data } = await httpRequest[method]<any, any[]>(reqeustUrl, { ...dataParams, ...pager })
    setDataSource([...data])
  }

  return {
    dataSource,
    fetchData
  }
}

export default useSharedTable
