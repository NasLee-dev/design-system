import { FlexProps, Flex } from '@ds/react-components-layout';
import { vars } from '@ds/themes';

type Props = FlexProps;

export const DesktopFirstNav = (props: Props) => {
  const { children, padding = 2, boxShadow = 'base', justify="right", className, ...rest } = props;
  const currentClassName = ["w-full h-[56px] fixed top-0 z-50", className].join(" ");
  return (
    <Flex 
      className={currentClassName} 
      boxShadow={boxShadow} 
      justify={justify} 
      {...rest}
      padding={padding}
      style={{
        background: vars.colors.$static.light.color.white,
      }}
    >
      {children}
    </Flex>
  )
};

