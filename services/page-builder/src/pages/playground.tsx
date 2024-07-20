import { vars } from '@ds/themes'
import { MobileFirstLayout } from '../components/view/MobileFirstLayout'
import { ImageSlice } from '../components/view/slices/Image'
import { TextSlice } from '../components/view/slices/Text'
import { CDN_BASE_URL } from '../constants'

const PlaygroundPage = () => {
  return (
    <MobileFirstLayout>
      <TextSlice 
        text="본 이벤트는 종료되었습니다"
        sliceStyle={{
          textColor: vars.colors.$static.light.color.white,
          backgroundColor: vars.colors.$static.light.color.black,
          textSize: 16,
          textWeight: 700
        }}
      />
      <ImageSlice 
        ImageUrl={`${CDN_BASE_URL}/test/hero_mobile.webp`}
        alt="hero image"
        sliceStyle={{
          backgroundColor: 'FFD951',
          paddingX: 8
        }}
      />
    </MobileFirstLayout>
  )
}

export default PlaygroundPage
