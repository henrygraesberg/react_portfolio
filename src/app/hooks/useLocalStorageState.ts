"use client"

import { useState, useEffect } from "react"

const useLocalStorageState = <T>(key: string, defaultValue: T) => {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage) as T
    }
    return defaultValue as T
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState] as const
}

export default useLocalStorageState