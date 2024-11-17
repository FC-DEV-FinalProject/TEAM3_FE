import { Meta, StoryObj } from '@storybook/react'

import { Input } from './index'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    inputSize: 'medium',
    errorMessage: null,
    placeholder: 'Enter text',
    type: 'text',
  },
  argTypes: {
    inputSize: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large', 'full'],
    },
    type: {
      control: { type: 'select' },
      options: ['email', 'password', 'phone', 'text'],
    },
  },
}

type StoryType = StoryObj<typeof Input>

export const Default: StoryType = {}

export const Small: StoryType = {
  args: {
    inputSize: 'small',
    placeholder: 'Small input',
  },
}

export const Medium: StoryType = {
  args: {
    inputSize: 'medium',
    placeholder: 'Medium input',
  },
}

export const Large: StoryType = {
  args: {
    inputSize: 'large',
    placeholder: 'Large input',
  },
}

export const Full: StoryType = {
  args: {
    inputSize: 'full',
    placeholder: 'full input',
  },
}

export default meta