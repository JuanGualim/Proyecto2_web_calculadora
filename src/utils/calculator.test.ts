import { add } from './calculator'

describe('calculator', () => {
  it('adds numbers', () => {
    expect(
      add(2, 2)
    ).toBe(4)
  })
})