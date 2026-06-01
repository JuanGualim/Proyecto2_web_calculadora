import { useState } from 'react'
import {
  add,
  subtract,
  multiply,
  divide,
} from '../utils/calculator'

export function useCalculator() {
    const [display, setDisplay] = useState('0')

    const [firstOperand, setFirstOperand] = useState<number | null>(null)

    const [operator, setOperator] = useState<string | null>(null)

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

    const selectOperator = (nextOperator: string) => {
        setFirstOperand(Number(display))
        setOperator(nextOperator)
        setDisplay('0')
    }
    const calculate = () => {
    if (
        firstOperand === null ||
        operator === null
    ) {
        return
    }

    const secondOperand = Number(display)

    let result = 0

    if (operator === '+') {
        result = add(
        firstOperand,
        secondOperand,
        )
    }

    if (operator === '-') {
        result = subtract(
        firstOperand,
        secondOperand,
        )
    }

    if (operator === '*') {
        result = multiply(
        firstOperand,
        secondOperand,
        )
    }

    if (operator === '/') {
        result = divide(
        firstOperand,
        secondOperand,
        )
    }

    setDisplay(String(result))

    setFirstOperand(null)
    setOperator(null)
    }

    return {
        display,
        appendDigit,
        selectOperator,
        calculate,
    }
}