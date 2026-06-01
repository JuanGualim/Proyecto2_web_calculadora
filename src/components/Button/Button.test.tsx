import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders label', () => {
    render(
      <Button
        label="7"
        onClick={() => {}}
      />
    )

    expect(
      screen.getByText('7')
    ).toBeInTheDocument()
  })
})