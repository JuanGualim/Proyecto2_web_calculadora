import type { Meta, StoryObj } from '@storybook/react-vite'
import { Display } from './Display'

const meta: Meta<typeof Display> = {
  title: 'Components/Display',
  component: Display,
}

export default meta

type Story = StoryObj<typeof Display>

export const Normal: Story = {
  args: {
    value: '123',
  },
}

export const Error: Story = {
  args: {
    value: 'ERROR',
  },
}