import { useState } from 'react'

export function useCalculator() {
  const [display, setDisplay] = useState('0')

    const appendDigit = (digit: string) => {
    setDisplay(currentDisplay => {
        if (currentDisplay.length >= 9) {
        return currentDisplay
        }

        if (currentDisplay === '0') {
        return digit
        }

        return currentDisplay + digit
    })
    }
  return {
    display,
    appendDigit,
  }
}