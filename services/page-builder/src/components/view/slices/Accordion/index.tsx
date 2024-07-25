import { vars } from '@ds/themes';
import { Box } from '@ds/react-components-layout';
import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from '@ds/react-components-accordion';

type Props = {
  key: string;
  title: string;
  content: string;

  sliceStyle?: {
    padding?: keyof typeof vars.box.spacing;
    paddingX?: keyof typeof vars.box.spacing;
    paddingY?: keyof typeof vars.box.spacing;
    backgroundColor?: string;
    titleTextColor?: string;
    titleTextSize?: keyof typeof vars.typography.fontSize;
    titleTextWeight?: keyof typeof vars.typography.fontWeight;
    contentTextColor?: string;
    contentTextSize?: keyof typeof vars.typography.fontSize;
    contentTextWeight?: keyof typeof vars.typography.fontWeight;
  };
};

export const AccordionSlice: React.FC<Props> = ({ key, title, content, sliceStyle }: Props) => {
  const {
    padding = 0,
    paddingX = 2,
    paddingY = 0,
    backgroundColor = vars.colors.$scale.gray[200],
  } = sliceStyle ?? {};

  return (
    <Box
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      style={{
        backgroundColor,
      }}
    >
      <Accordion>
        <AccordionItem itemName={key}>
          <AccordionButton>{title}</AccordionButton>
          <AccordionPanel>{content}</AccordionPanel>  
        </AccordionItem>
      </Accordion>
    </Box>
  )
};
