import React from "react";
import { Text } from "@ds/react-components-layout"
import { vars } from "@ds/themes";
type Props = {
  text: string;
  sliceStyle?: {
    padding?: keyof typeof vars.box.spacing;
    paddingX?: keyof typeof vars.box.spacing;
    paddingY?: keyof typeof vars.box.spacing;
    backgroundColor?: string;
    textColor?: string;
    textSize?: keyof typeof vars.typography.fontSize;
    textWeight?: keyof typeof vars.typography.fontWeight;
    textAlign?: "left" | "center" | "right";
  };
};

export const TextSlice: React.FC<Props> = ({ text, sliceStyle }: Props) => {
  const {
    padding = 2,
    paddingX = 2,
    paddingY = 2,
    backgroundColor = vars.colors.$static.light.color.white,
    textColor = vars.colors.$static.light.color.black,
    textSize,
    textWeight,
    textAlign = 'center'
  } = sliceStyle ?? {};
  return (
    <Text 
      fontSize="2xl" 
      padding={padding} 
      paddingX={paddingX} 
      paddingY={paddingY} 
      style={{
        backgroundColor,
        color: textColor,
        textAlign,
        fontSize: textSize,
        fontWeight: textWeight
      }}>
      {text}
    </Text>
  )
};
