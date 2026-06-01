import { useState } from 'react'

export function useCalculator() {
  const [display, setDisplay] = useState('0')

  const appendDigit = (digit: string) => {
    if (display === '0') {
      setDisplay(digit)
      return
    }

    setDisplay(display + digit)
  }

  return {
    display,
    appendDigit,
  }
}