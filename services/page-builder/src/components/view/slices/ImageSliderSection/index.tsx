import { Image } from '../ImageSlider'
import { vars } from '@ds/themes'
import { TextSlice } from '../Text'
import { ImageSliderSlice } from '../ImageSlider'

type Props = {
  text: string;
  images: Image[];
  sliceStyle?: {
    paddingX?: keyof typeof vars.box.spacing;
    textColor?: string;
    backgroundColor?: string;
    imageItemWidth?: number;
  }
};

export const ImageSliderSectionSlice: React.FC<Props> = ({ text, images, sliceStyle }: Props) => {
  const {
    paddingX = 8,
    textColor = vars.colors.$static.light.color.black,
    backgroundColor = vars.colors.$static.light.color.white,
    imageItemWidth = 280
  } = sliceStyle ?? {};

  return (
    <>
      <TextSlice
        text={text}
        sliceStyle={{
          textSize: 20,
          textColor,
          backgroundColor,
          textAlign: 'left',
          paddingX,
          textWeight: 700
        }}
      />
      <ImageSliderSlice 
        images={images}
        sliceStyle={{
          paddingX,
          imageItemWidth,
          backgroundColor: vars.colors.$scale.gray[900],
        }}
      />
    </>
  )
};
