export const success = <T>(data?: T) => {
  const timestamp = new Date().toISOString()
  return { statusCode: 200, message: 'ok', timestamp, data }
}

export const error = <T>(data?: T) => {
  const timestamp = new Date().toISOString()
  return { statusCode: 500, message: 'ok', timestamp, data }
}
