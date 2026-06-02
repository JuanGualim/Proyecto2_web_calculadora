import { useState } from 'react'
import {
    add,
    subtract,
    multiply,
    divide,
    isInvalidResult,
    modulo,
    calculateResult,
} from '../utils/calculator'

export function useCalculator() {
    const [display, setDisplay] = useState('0')

    const [firstOperand, setFirstOperand] = useState<number | null>(null)

    const [operator, setOperator] = useState<string | null>(null)
    const [shouldResetDisplay, setShouldResetDisplay] = useState(false)

    const appendDigit = (digit: string) => {
        if (shouldResetDisplay) {
            setDisplay(digit)
            setShouldResetDisplay(false)
            return
        }

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

    const appendDecimal = () => {
    setDisplay(currentDisplay => {
        if (currentDisplay.includes('.')) {
            return currentDisplay
        }

        return `${currentDisplay}.`
    })
    }

    const selectOperator = (nextOperator: string) => {
    const currentValue = Number(display)

    if (
        firstOperand !== null &&
        operator !== null
    ) {
        const result = calculateResult(
        firstOperand,
        currentValue,
        operator,
        )

        if (isInvalidResult(result)) {
        setDisplay('ERROR')
        setFirstOperand(null)
        setOperator(null)
        setShouldResetDisplay(true)
        return
        }

        setDisplay(String(result))
        setFirstOperand(result)
        setOperator(nextOperator)
        setShouldResetDisplay(true)

        return
    }

    setFirstOperand(currentValue)
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

        if (operator === '%') {
            result = modulo(
                firstOperand,
                secondOperand,
            )
        }
        
        if (isInvalidResult(result)) {
            setDisplay('ERROR')

            setFirstOperand(null)
            setOperator(null)
            setShouldResetDisplay(true)

            return
        }

        setDisplay(String(result))
        setShouldResetDisplay(true)

        setFirstOperand(null)
        setOperator(null)
    }

    const clear = () => {
        setDisplay('0')
        setFirstOperand(null)
        setOperator(null)
        setShouldResetDisplay(false)
    }

        const toggleSign = () => {
            if (display === '0') {
                return
            }

            if (display.startsWith('-')) {
                setDisplay(display.slice(1))
                return
            }

            setDisplay(`-${display}`)
        }

    return {
        display,
        appendDigit,
        appendDecimal,
        selectOperator,
        calculate,
        clear,
        toggleSign,
    }
}