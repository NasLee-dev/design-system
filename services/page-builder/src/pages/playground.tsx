import { vars } from '@ds/themes'
import { MobileFirstLayout } from '../components/view/MobileFirstLayout'
import { AccordionSlice } from '../components/view/slices/Accordion'
import { ImageSlice } from '../components/view/slices/Image'
import { ImageSliderSectionSlice } from '../components/view/slices/ImageSliderSection'
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
      {/* 혜택 영역 */}
      <SpacingSlice 
        sliceStyle={{
          height: 60,
          backgroundColor: vars.colors.$static.light.color.black
        }}
      />
      <ImageSlice 
        ImageUrl={`${CDN_BASE_URL}/test/coin_mobile.webp`}
        alt="coin image"
        sliceStyle={{
          width: 90,
          backgroundColor: vars.colors.$static.light.color.black,
        }}
      />
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
      {/* 강의 목록 Section */}
      <SpacingSlice 
        sliceStyle={{
          height: 60,
          backgroundColor: vars.colors.$scale.gray[900],
        }}
      />
      <TextSlice 
        text={`100원에 만나볼 수 있는\nBEST 강의 라인업`}
        highlightTexts={['BEST 강의']}
        sliceStyle={{
          textWeight: 700,
          textSize: 24,
          textColor: vars.colors.$static.light.color.white,
          backgroundColor: vars.colors.$scale.gray[900],
          highlightColor: '#FFD648'
        }}
      />
      <TextSlice 
        text={`100일간 내 마음대로 무제한 수강 가능한\n카테고리별 BEST 강의 라인업을 아래에서 확인해보세요!`}
        sliceStyle={{
          textSize: 14,
          textColor: vars.colors.$static.light.color.white,
          backgroundColor: vars.colors.$scale.gray[900],
        }}
      />
      <SpacingSlice 
        sliceStyle={{
          height: 32,
          backgroundColor: vars.colors.$scale.gray[900],
        }}
      />
      <ImageSliderSectionSlice 
        text={`💻 프로그래밍`}
        images={[
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_programming_1.webp`,
            alt: '강의 라인업: 프로그래밍 1',
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_programming_2.webp`,
            alt: '강의 라인업: 프로그래밍 2',
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_programming_3.webp`,
            alt: '강의 라인업: 프로그래밍 3',
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_programming_4.webp`,
            alt: '강의 라인업: 프로그래밍 4',
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_programming_5.webp`,
            alt: '강의 라인업: 프로그래밍 5',
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_programming_6.webp`,
            alt: '강의 라인업: 프로그래밍 6',
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_programming_7.webp`,
            alt: '강의 라인업: 프로그래밍 7',
          }
        ]}
        sliceStyle={{
          backgroundColor: vars.colors.$scale.gray[900],
          textColor: '#32BFA1',
          paddingX: 8,
        }}
      />
      <SpacingSlice 
        sliceStyle={{
          height: 32,
          backgroundColor: vars.colors.$scale.gray[900],
        }}
      />
      <TextSlice 
        text={`100원에 만나볼 수 있는\nBEST 강의 라인업`}
        highlightTexts={['BEST 강의']}
        sliceStyle={{
          textWeight: 700,
          textSize: 24,
          textColor: vars.colors.$static.light.color.white,
          backgroundColor: vars.colors.$scale.gray[900],
          highlightColor: '#FFD648'
        }}
      />
      <TextSlice 
        text={`100일간 내 마음대로 무제한 수강 가능한\n카테고리별 BEST 강의 라인업을 아래에서 확인해보세요!`}
        sliceStyle={{
          textSize: 14,
          textColor: vars.colors.$static.light.color.white,
          backgroundColor: vars.colors.$scale.gray[900],
        }}
      />
      <SpacingSlice 
        sliceStyle={{
          height: 32,
          backgroundColor: vars.colors.$scale.gray[900],
        }}
      />
      <ImageSliderSectionSlice 
        text={`💻 디자인/일러스트`}
        images={[
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_design_1.webp`,
            alt: '강의 라인업: 프로그래밍 1',
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_design_2.webp`,
            alt: '강의 라인업: 프로그래밍 2',
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_design_3.webp`,
            alt: '강의 라인업: 프로그래밍 3',
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_design_4.webp`,
            alt: '강의 라인업: 프로그래밍 4',
          },
        ]}
        sliceStyle={{
          backgroundColor: vars.colors.$scale.gray[900],
          textColor: '#F26346',
          paddingX: 8,
        }}
      />
      <SpacingSlice 
        sliceStyle={{
          height: 32,
          backgroundColor: vars.colors.$scale.gray[900],
        }}
      />
      {/* 주의 사항 섹션 */}
      <SpacingSlice 
        sliceStyle={{
          height: 120,
          backgroundColor: vars.colors.$scale.gray[200],
        }}
      />
      <TextSlice 
        text="100원딜 이벤트 주의사항"
        sliceStyle={{
          backgroundColor: vars.colors.$scale.gray[200],
          textSize: 24,
          textWeight: 700,
        }}
      />
      <SpacingSlice 
        sliceStyle={{
          height: 16,
          backgroundColor: vars.colors.$scale.gray[200],
        }}
      />
      <AccordionSlice 
        accordionContents={[
          {
            key: '1',
            title: '이벤트 기간',
            content: '2021년 8월 1일 ~ 2021년 8월 31일까지',
          },
          {
            key: '2',
            title: '이벤트 내용',
            content: '100원에 만나볼 수 있는 BEST 강의 라인업을 확인하고, 100일간 무제한 수강하세요!',
          },
          {
            key: '3',
            title: '이벤트 참여 방법',
            content: '이벤트 기간 동안, 이벤트 페이지에서 원하는 강의를 선택하고 100원을 결제하세요.',
          },
          {
            key: '4',
            title: '이벤트 참여 대상',
            content: '이벤트 기간 동안, 이벤트 페이지에서 원하는 강의를 선택하고 100원을 결제하세요.',
          },
          {
            key: '5',
            title: '이벤트 참여 대상',
            content: '이벤트 기간 동안, 이벤트 페이지에서 원하는 강의를 선택하고 100원을 결제하세요.',
          },
        ]}
        openedAccordion={true}
        sliceStyle={{
          backgroundColor: vars.colors.$scale.gray[200],
        }}
      />
      <SpacingSlice 
        sliceStyle={{
          height: 120,
          backgroundColor: vars.colors.$scale.gray[200],
        }}
      />
    </MobileFirstLayout>
  )
}

export default PlaygroundPage
