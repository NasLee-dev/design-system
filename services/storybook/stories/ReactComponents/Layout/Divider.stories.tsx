import "@ds/react-components-layout/style.css";
import { Divider as _Divider, Box } from '@ds/react-components-layout';
import { vars } from "@ds/themes";
import React from 'react'

export default {
  title: "React Components/Layout/Divider",
  component: _Divider,
  decorators: [
    (Story) => <Box padding={3} color="blue" background="orange" style={{
      width: '300px',
      height: '300px',
    }}><Story /></Box>
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' }
    },
    variant: {
      options: ['solid', 'dashed'],
      control: { type: 'select' }
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: { type: 'select' }
    },
  }
};

export const DividerStory = {
  args: {
    color: 'gray',
    size: 1,
    variant: 'solid',
    orientation: 'horizontal',
  }
};