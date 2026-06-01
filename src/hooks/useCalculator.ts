import { useState } from 'react'

export function useCalculator() {
  const [display, setDisplay] = useState('0')

  return {
    display,
    setDisplay,
  }
}