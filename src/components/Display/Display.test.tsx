import { render, screen } from '@testing-library/react'
import { Display } from './Display'

describe('Display', () => {
  it('shows the provided value', () => {
    render(<Display value="123" />)

    expect(
      screen.getByText('123')
    ).toBeInTheDocument() 
  })
})