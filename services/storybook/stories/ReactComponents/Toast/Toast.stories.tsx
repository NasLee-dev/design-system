import { Button } from '@ds/react-components-button';
import React from "react";
import { ToastProvider } from '@ds/react-components-toast';
import { useToast } from '@ds/react-components-toast';
import "@ds/react-components-toast/style.css";

export default {
  title: "React Components/Toast",
  parameters: {
    layout: "centered",
  },
};

const Example = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          payload: {
            message: "Hello, world!",
          },
        })
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