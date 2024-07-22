import { Box } from '@ds/react-components-layout'
import { vars } from '@ds/themes'

type Props = {
  ImageUrl: string;
  alt: string;
  sliceStyle?: {
    width?: number;
    padding?: keyof typeof vars.box.spacing;
    paddingX?: keyof typeof vars.box.spacing;
    paddingY?: keyof typeof vars.box.spacing;
    backgroundColor?: string;
  }
};

export const ImageSlice: React.FC<Props> = ({ ImageUrl, alt, sliceStyle }: Props) => {
  const {
    width = '100%',
    padding = 0,
    paddingX = 0,
    paddingY = 0,
    backgroundColor = 'transparent'
  } = sliceStyle ?? {};
  return (
    <Box
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      style={{
        width,
        backgroundColor,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img 
        src={ImageUrl}
        alt={alt}
        style={{
          width
        }}
      />
    </Box>
  )
};
