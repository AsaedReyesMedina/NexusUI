import * as React from "react";
import type { Preview } from "@storybook/react-webpack5";
import "./../src/index.css";

import { themes } from 'storybook/theming';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/addon-docs/blocks';
const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
      page: () => (
        <div className="">
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </div>
      ),
    },
  },
};

export default preview;
