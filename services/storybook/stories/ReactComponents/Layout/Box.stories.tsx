import "@ds/react-components-layout/style.css";
import { Box as _Box } from '@ds/react-components-layout';

//  Box is a layout component that can be used to wrap other components and apply padding, margin, background color, and more.

export default {
  title: "React Components/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const BoxStory = {
  args: {
    as: 'button',
    padding: '5',
    background: 'pink',
    boxShadow: 'xl',
    borderRadius: 'md',
  }
};