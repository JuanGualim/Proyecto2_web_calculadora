import { act, renderHook } from '@testing-library/react'
import { useCalculator } from './useCalculator'

describe('useCalculator', () => {
    it('starts with display 0', () => {
        const { result } = renderHook(() => useCalculator())

        expect(result.current.display).toBe('0')
    })

    it('adds a digit to display', () => {
        const { result } = renderHook(() => useCalculator())

        act(() => {
        result.current.appendDigit('5')
        })

        expect(result.current.display).toBe('5')
    })
    it('does not allow more than 9 characters', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
        '1234567890'.split('').forEach(
        digit => result.current.appendDigit(digit)
        )
    })

    expect(result.current.display).toBe('123456789')
    })

    it('adds two numbers', () => {
    const { result } = renderHook(
        () => useCalculator()
    )

    act(() => {
        result.current.appendDigit('2')
    })

    act(() => {
        result.current.selectOperator('+')
    })

    act(() => {
        result.current.appendDigit('3')
    })

    act(() => {
        result.current.calculate()
    })

    expect(
        result.current.display
    ).toBe('5')
    })
    
    it('subtracts two numbers', () => {
    const { result } = renderHook(
        () => useCalculator()
    )

    act(() => {
        result.current.appendDigit('5')
    })

    act(() => {
        result.current.selectOperator('-')
    })

    act(() => {
        result.current.appendDigit('2')
    })

    act(() => {
        result.current.calculate()
    })

    expect(
        result.current.display
    ).toBe('3')
    })

    it('shows ERROR for negative results', () => {
    const { result } = renderHook(
        () => useCalculator()
    )

    act(() => {
        result.current.appendDigit('2')
    })

    act(() => {
        result.current.selectOperator('-')
    })

    act(() => {
        result.current.appendDigit('5')
    })

    act(() => {
        result.current.calculate()
    })

    expect(
        result.current.display
    ).toBe('ERROR')
    })

    it('shows ERROR for overflow', () => {
    const { result } = renderHook(
        () => useCalculator()
    )

    act(() => {
        '99999999'.split('').forEach(
        digit => result.current.appendDigit(digit)
        )
    })

    act(() => {
        result.current.selectOperator('+')
    })

    act(() => {
        result.current.appendDigit('1')
    })

    act(() => {
        result.current.calculate()
    })

    expect(
        result.current.display
    ).toBe('ERROR')
    })

    it('clears calculator state', () => {
    const { result } = renderHook(
        () => useCalculator()
    )

    act(() => {
        result.current.appendDigit('5')
    })

    act(() => {
        result.current.clear()
    })

    expect(
        result.current.display
    ).toBe('0')
    })
  
    it('adds a decimal point', () => {
    const { result } = renderHook(
        () => useCalculator()
    )

    act(() => {
        result.current.appendDigit('2')
    })

    act(() => {
        result.current.appendDecimal()
    })

    act(() => {
        result.current.appendDigit('5')
    })

    expect(
        result.current.display
    ).toBe('2.5')
    })

    it('changes number sign', () => {
    const { result } = renderHook(
        () => useCalculator()
    )

    act(() => {
        result.current.appendDigit('5')
    })

    act(() => {
        result.current.toggleSign()
    })

    expect(
        result.current.display
    ).toBe('-5')
    })

    it('restores positive sign', () => {
    const { result } = renderHook(
        () => useCalculator()
    )

    act(() => {
        result.current.appendDigit('5')
    })

    act(() => {
        result.current.toggleSign()
    })

    act(() => {
        result.current.toggleSign()
    })

    expect(
        result.current.display
    ).toBe('5')
    })

})