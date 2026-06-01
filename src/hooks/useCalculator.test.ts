import { renderHook } from '@testing-library/react'
import { useCalculator } from './useCalculator'

describe('useCalculator', () => {
  it('starts with display 0', () => {
    const { result } = renderHook(() => useCalculator())

    expect(result.current.display).toBe('0')
  })
})