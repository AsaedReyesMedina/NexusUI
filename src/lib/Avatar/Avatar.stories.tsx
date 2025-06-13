import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Avatar from './Avatar';

const meta = {
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://github.com/shadcn.png',
  },
  render: (args) => (
    <Avatar {...args}>
      Asaed RM
    </Avatar>
  )
};