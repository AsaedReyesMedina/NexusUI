import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Alert from './Alert';
import { Info } from 'lucide-react';

const meta = {
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Alert {...args}>
      <Info className="w-4 h-4" />
      <Alert.Title>Alert Title</Alert.Title>
    </Alert>
  )
};