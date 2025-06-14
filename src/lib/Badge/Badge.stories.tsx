import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Badge from './Badge';

const meta = {
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
  render: (args) => (
    <Badge {...args}>
      Badge
    </Badge>
  )
};