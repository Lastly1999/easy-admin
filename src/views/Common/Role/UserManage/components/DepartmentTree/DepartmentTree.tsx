import React, { useEffect, useState } from 'react'
import { getSystemDeps } from '@/api/common/dep'
import { Tree, Input } from 'antd'
import type { DataNode, DirectoryTreeProps } from 'antd/es/tree'
import type { SystemDepartmentInfo } from '@/api/model/dep'

const { DirectoryTree } = Tree
const { Search } = Input

type RecursiveMenu<T> = (sourceData: T) => any[]

const DepartmentTree: React.FC = () => {
  const [treeData, setTreeData] = useState<DataNode[]>()

  useEffect(() => {
    getSystemDeps().then((res) => {
      console.log(recursiveMenu(res.data))
      setTreeData([...recursiveMenu(res.data)])
    })
  }, [])

  const recursiveMenu: RecursiveMenu<SystemDepartmentInfo[]> = (sourceData = []) => {
    const newArr: any[] = []
    sourceData.map((item) => (item.children ? newArr.push({ title: item.name, key: item.id, children: recursiveMenu(item.children) }) : newArr.push({ title: item.name, key: item.id })))
    return newArr
  }

  const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
    console.log('Trigger Select', keys, info)
  }

  const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
    console.log('Trigger Expand', keys, info)
  }

  const departMentTreeCut = () => {
    console.log('departMentTreeCut')
  }

  return (
    <div>
      <Search style={{ marginBottom: 8 }} placeholder="搜索部门" onChange={departMentTreeCut} />
      <DirectoryTree multiple defaultExpandAll onSelect={onSelect} onExpand={onExpand} treeData={treeData} />
    </div>
  )
}

export default DepartmentTree
