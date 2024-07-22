import { vars } from '@ds/themes'
import { MobileFirstLayout } from '../components/view/MobileFirstLayout'
import { ImageSlice } from '../components/view/slices/Image'
import { SpacingSlice } from '../components/view/slices/Spacing'
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
        }}
      />
      <SpacingSlice 
        sliceStyle={{
          height: 60,
          backgroundColor: vars.colors.$static.light.color.black
        }}
      />
      <div 
        className="flex justify-center w-full"
      >
        <ImageSlice 
          ImageUrl={`${CDN_BASE_URL}/test/coin_mobile.webp`}
          alt="coin image"
          sliceStyle={{
            width: 90,
            backgroundColor: vars.colors.$static.light.color.black,
          }}
        />
      </div>
      <TextSlice 
        text={`공부 시작하고 결심한 강의\n100원만 더 내고 이 모든 혜택 가져가세요!`}
        highlightTexts={['100원만']}
        sliceStyle={{
          textWeight: 700,
          textSize: 24,
          textColor: vars.colors.$static.light.color.white,
          backgroundColor: vars.colors.$static.light.color.black,
          highlightColor: '#FFD648'
        }}
      />
      <TextSlice 
        text={`100일간 내 마음대로 무제한 수강 가능한\n카테고리별 BEST 강의 라인업을 아래에서 확인해보세요!`}
        sliceStyle={{
          textSize: 14,
          textColor: vars.colors.$static.light.color.white,
          backgroundColor: vars.colors.$static.light.color.black,
        }}
      />
      <ImageSlice 
        ImageUrl={`${CDN_BASE_URL}/test/benefit_mobile.webp`}
        alt="주요 행사 강의 목록 및 일자 안내 이미지, 강의 하나 구매 시 추가 강의는 100원 구매 가능"
        sliceStyle={{
          paddingX: 8,
          backgroundColor: vars.colors.$static.light.color.black,
        }}
      />
    </MobileFirstLayout>
  )
}

export default PlaygroundPage
