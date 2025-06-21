import type { Meta, StoryObj } from '@storybook/react-webpack5';

import AlertDialog from './AlertDialog';

const meta = {
  component: AlertDialog,
} satisfies Meta<typeof AlertDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    onOpenChange: () => { }
  },
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialog.Trigger>
        <button>Open Alert Dialog</button>
      </AlertDialog.Trigger>
    </AlertDialog>
  )
};