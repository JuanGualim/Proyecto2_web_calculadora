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
})