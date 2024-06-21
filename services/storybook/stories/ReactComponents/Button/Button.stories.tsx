import "@ds/react-components-button/style.css";
import { Button as _Button } from '@ds/react-components-button';
import { vars } from '@ds/themes';
import { useButton } from '@ds/react-hooks-button';
import { Text } from '@ds/react-components-layout';

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
    size: "md",
    children: 'Button',
    variant: "outline",
    disabled: false,
    isLoading: false,
    leftIcon: "🚀",
  },
};

export const TextButtonStory = {
  render: () => {
    const { buttonProps } = useButton({
      elementType: "div",
      onClick: () => {
        console.log("Button clicked");
      }
    });
    return (
      <Text
        {...buttonProps}
        as="div"
        fontSize="md"
        color="green"
        style={{ cursor: "pointer", userSelect: "none" }}
      >
        텍스트 버튼입니다.
      </Text>
    )
  }
};