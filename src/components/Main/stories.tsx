import { Meta, StoryObj } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  args: {
    title: 'title default',
    description: 'description default'
  },
  parameters: {
    layout: 'fullscreen'
  },
  component: Main
} as Meta

export const Default: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    title: 'title basic',
    description: 'description basic'
  }
}
