import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Breadcrumb from './Breadcrumb';

const meta = {
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
  render: (args) => (
    <Breadcrumb {...args}>
      
        
    </Breadcrumb>
  )
};