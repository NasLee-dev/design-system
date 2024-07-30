import { Box, BoxProps } from "@ds/react-components-layout"

type Props = BoxProps;

export const DesktopFirstBody = (props: Props) => {
  const { children, className, padding = 2, ...rest } = props;
  const currentClassName = ["w-full min-h-screen relative top-0 pt-[56px]", className].join(" ");
  return (
    <Box 
      className={currentClassName}
      padding={padding}
      {...rest}
    >
      {children}
    </Box>
  )
};
