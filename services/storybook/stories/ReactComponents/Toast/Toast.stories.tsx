import { Button } from '@ds/react-components-button';
import React from "react";
import { ToastProvider } from '@ds/react-components-toast';
import "@ds/react-components-toast/styles.css"

export default {
  title: "React Components/Toast",
  parameters: {
    layout: "centered",
  },
};

const Example = () => {
  

  return (
    <Button
      onClick={() =>
        console.log("Button Clicked")
      }
    >
      Toast Button
    </Button>
  );
}

export const ToastStory = {
  render: () => (
    <ToastProvider>
      <Example />
    </ToastProvider>
  ),
};