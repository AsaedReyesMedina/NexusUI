import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Accordion from './Accordion';
import { AccordionContent, AccordionItem, AccordionTrigger } from './components/AccordionComponents';

const meta = {
  component: Accordion,
  subcomponents: {
    AccordionItem,
    AccordionTrigger,
    AccordionContent
  }
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item>
        <Accordion.Trigger>Accordion Trigger</Accordion.Trigger>
        <Accordion.Content>Accordion Content</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
};