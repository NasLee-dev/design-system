import React, { useMemo } from "react";
import { Text } from "@ds/react-components-layout"
import { vars } from "@ds/themes";
type Props = {
  text: string;
  highlightTexts?: string[];
  sliceStyle?: {
    padding?: keyof typeof vars.box.spacing;
    paddingX?: keyof typeof vars.box.spacing;
    paddingY?: keyof typeof vars.box.spacing;
    backgroundColor?: string;
    textColor?: string;
    textSize?: keyof typeof vars.typography.fontSize;
    textWeight?: keyof typeof vars.typography.fontWeight;
    textAlign?: "left" | "center" | "right";
    highlightColor?: string;
    highlightTextWeight?: keyof typeof vars.typography.fontWeight;
  };
};

export const TextSlice: React.FC<Props> = ({ text, sliceStyle, highlightTexts = [] }: Props) => {
  const {
    padding = 2,
    paddingX = 2,
    paddingY = 2,
    backgroundColor = vars.colors.$static.light.color.white,
    textColor = vars.colors.$static.light.color.black,
    textSize,
    textWeight,
    textAlign = 'center',
    highlightColor = vars.colors.$static.light.yellow[400],
    highlightTextWeight,
  } = sliceStyle ?? {};

  
  const hasHighlightText = highlightTexts.length > 0;
  const highlightedText = useMemo(() => {
    if (hasHighlightText) {
      const regex = new RegExp(`(${highlightTexts.join('|')})`, 'gi');

      return text.split(regex).map((word, index) => {
        if (highlightTexts.some(query => new RegExp(query, 'gi').test(word))) {
          return (
            <span 
              key={index} 
              style={{
                color: highlightColor,
                fontWeight: highlightTextWeight ?? textWeight
              }}
            >
              {word}
            </span>
          );
        }

        return word;
      })
    }
    return text;
  }, [text, highlightTexts])

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
        fontWeight: textWeight,
        whiteSpace: 'pre-wrap',
        wordBreak: 'keep-all'
      }}>
      {highlightedText}
    </Text>
  )
};
