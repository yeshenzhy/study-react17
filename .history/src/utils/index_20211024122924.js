export const isFalsy = (value) => value === 0 ? true : !!value

export const clearObject = (object) => {
  const result = {...object}
  Object.keys(object).forEach(key => {
    const value = object[key]
    if (!isFalsy(value)) {
      delete object[key]
    }
  })
  return result
}