import "@ds/react-components-layout/style.css";
import { Text as _Text } from '@ds/react-components-layout';
import { classes, vars } from "@ds/themes";

//  Box is a layout component that can be used to wrap other components and apply padding, margin, background color, and more.

export default {
  title: "React Components/Layout/Typography/Text",
  component: _Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fontSize: {
      options: Object.keys(classes.typography.text),
      control: { type: 'select' }
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: { type: 'select' }
    },
  }
};

export const TextStory = {
  args: {
    as: 'p',
    fontSize: 'sm',
    children: 'This is a text component',
  }
};