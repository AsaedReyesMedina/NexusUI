import type { Meta, StoryObj } from '@storybook/react-webpack5';

import AspectRatio from './AspectRatio';

const meta = {
  component: AspectRatio,
} satisfies Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <AspectRatio {...args}>
      <div>Aspect Ratio</div>
    </AspectRatio>
  )
};