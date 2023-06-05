// import { useState, useEffect } from "react";

// export function useLocalStorage<T>(key: string, fallbackValue: T) {
//     const [value, setValue] = useState(fallbackValue);
//     useEffect(() => {
//         const stored = localStorage.getItem(key);
//         setValue(stored ? JSON.parse(stored) : fallbackValue);
//     }, [fallbackValue, key]);

//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(value));
//     }, [key, value]);

//     return [value, setValue] as const;
// }

import { useState } from "react"

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [state, setState] = useState(() => {
    // Initialize the state
    try {
      const value = window.localStorage.getItem(key)
      // Check if the local storage already has any values,
      // otherwise initialize it with the passed initialValue
      return value ? JSON.parse(value) : initialValue
    } catch (error) {
    //   console.log(error)
    }
  })

  const setValue = (value: T) => {
    try {
      // If the passed value is a callback function,
      //  then call it with the existing state.
      window.localStorage.setItem(key, JSON.stringify(value))
      setState(value)
    } catch (error) {
    //   console.log(error)
    }
  }

  return [state, setValue]
}
