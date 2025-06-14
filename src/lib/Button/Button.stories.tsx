import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Button from './Button';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
  render: (args) => (
    <Button {...args}>
      Button
    </Button>
  )
};