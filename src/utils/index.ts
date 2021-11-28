import { useEffect, useState } from "react"
export const isFalsy = (value: unknown) => value === 0 ? false : !value


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

export const useDebounce = <T>(value:T,delay?:number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay])
  return debounceValue;
}

export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    add: (item: T) => setValue([...value, item]),
    removeIndex: (index: number) => {
      const copyArray = [...value];
      return copyArray.splice(index,1)
    },
    clear: () => setValue([])
  }
}