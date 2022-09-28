/**
 * 获取本地文件
 * @param {string} path 文件路径
 */
export const getMetaGlobalFile = <T>(globalModule: Record<string, unknown>) => {
  const modulesCode: T[] = []
  Object.values(globalModule).forEach((val: any) => {
    const mod = val['default']
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    modulesCode.push(...modList)
  })
  return modulesCode
}
