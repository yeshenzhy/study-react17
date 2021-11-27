import { useEffect, useState } from "react"
export const isFalsy = (value: any) => value === 0 ? false : !value


export const clearObject = (object:any) => {
  const result = {...object}
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}

export const useDebounce = (value:any,delay?:number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay])
  return debounceValue;
}