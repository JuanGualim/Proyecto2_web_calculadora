import {
  add,
  subtract,
  multiply,
  divide,
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
})