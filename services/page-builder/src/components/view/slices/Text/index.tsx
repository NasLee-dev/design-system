import { TextSliceSchema } from '@/src/utils/validation/schema/slices';
import { SliceSchemaProps } from '@/src/utils/validation/schema/types';
import { Text } from '@ds/react-components-layout';
import { vars } from '@ds/themes';
import { useMemo } from 'react';

type Props = SliceSchemaProps<typeof TextSliceSchema>;

export const TextSlice: React.FC<Props> = ({ text, highlightTexts = [], sliceStyle }: Props) => {
  const {
    padding = 2,
    paddingX = 2,
    paddingY = 2,
    backgroundColor = vars.colors.$static.light.color.white,
    textColor = vars.colors.$static.light.color.black,
    textSize,
    textWeight,
    textAlign = "center",
    highlightTextColor = vars.colors.$static.light.yellow[400],
    highlightTextWeight,
  } = sliceStyle ?? {};

  const hasHighlightText = highlightTexts.length > 0;
  const highlightedText = useMemo(() => {
    if (hasHighlightText) {
      const regex = new RegExp(`(${highlightTexts.join("|")})`, "gi");

      return text.split(regex).map((word, index) => {
        if (highlightTexts.some(query => new RegExp(query, 'i').test(word))) {
          return (
            <span
              key={`${word}-${index}`}
              style={{
                color: highlightTextColor,
                fontWeight: highlightTextWeight ?? textWeight,
              }}
            >
              {word}
            </span>
          );
        }

        return word;
      });
    };

    return text;
  }, [text, highlightTexts]);

  return (
    <Text
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      fontSize="2xl"
      style={{
        backgroundColor,
        color: textColor,
        fontSize: textSize,
        fontWeight: textWeight,
        textAlign,
        whiteSpace: "pre-wrap",
        wordBreak: "keep-all",
      }}
    >
      {highlightedText}
    </Text>
  );
};