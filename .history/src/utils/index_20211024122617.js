export const clearObject = (object) => {
  const result = {...object}
  Object.keys(object).forEach(key => {
    const value = object[key]
    if (!value) {
      delete object[key]
    }
  })
  return result
}