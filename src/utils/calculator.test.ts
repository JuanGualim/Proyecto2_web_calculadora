import {
    add,
    subtract,
    multiply,
    divide,
    isInvalidResult,
    modulo,
} from './calculator'

describe('calculator', () => {
  it('adds numbers', () => {
    expect(add(2, 2)).toBe(4)
  })

  it('subtracts numbers', () => {
    expect(subtract(5, 2)).toBe(3)
  })

  it('multiplies numbers', () => {
    expect(multiply(3, 4)).toBe(12)
  })

  it('divides numbers', () => {
    expect(divide(10, 2)).toBe(5)
  })
    it('detects negative results', () => {
    expect(
        isInvalidResult(-1)
    ).toBe(true)
    })

    it('detects overflow results', () => {
    expect(
        isInvalidResult(100000000)
    ).toBe(true)
    })

    it('accepts valid results', () => {
    expect(
        isInvalidResult(99999999)
    ).toBe(false)
    })

    it('calculates modulo', () => {
    expect(
        modulo(10, 3)
    ).toBe(1)
    })

})