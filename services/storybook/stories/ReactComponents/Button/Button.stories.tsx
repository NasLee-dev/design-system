import "@ds/react-components-button/style.css";
import { Button as _Button } from '@ds/react-components-button';
import { vars } from '@ds/themes';
//  Box is a layout component that can be used to wrap other components and apply padding, margin, background color, and more.

export default {
  title: "React Components/Button",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
};

export const ButtonStory = {
  args: {
    size: "lg",
    children: 'Button',
    variant: "outline",
    disabled: false,
  }
};