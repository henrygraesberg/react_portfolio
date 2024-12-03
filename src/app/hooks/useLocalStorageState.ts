"use client"

import { useState, useEffect } from "react"

const useLocalStorageState = <T>(key: string, defaultValue: T) => {
  const [state, setState] = useState(() => {
    let valueInLocalStorage
    
    if(typeof window !== "undefined") {
      valueInLocalStorage = window.localStorage.getItem(key)
    } else {
      valueInLocalStorage = null
    }

    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage) as T
    }
    return defaultValue as T
  })

  useEffect(() => {
    if (typeof window !== "undefined") { 
      window.localStorage.setItem(key, JSON.stringify(state))
    }
  }, [key, state])

  return [state, setState] as const
}

export default useLocalStorageState