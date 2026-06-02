import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const NumberButton: Story = {
  args: {
    label: '7',
    onClick: () => {},
  },
}

export const OperatorButton: Story = {
  args: {
    label: '+',
    onClick: () => {},
  },
}