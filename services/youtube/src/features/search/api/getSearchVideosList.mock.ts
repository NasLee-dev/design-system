import { HttpHandler, HttpResponse, http } from "msw";
import { getSearchVideosListURL } from "./getSearchVideosList";

export const getMockSearchVideosList: HttpHandler = http.get(
  getSearchVideosListURL,
  () => {
    return HttpResponse.json(GET_MOCK_SEARCH_VIDEOS_LIST.success);
  },
);

export const GET_MOCK_SEARCH_VIDEOS_LIST = {
  success: {
    lists: [
      {
        videoId: "W0iXhgX3VzE",
        title:
          "&quot;일자리 30만 개 날아갈 것&quot; 뉴욕 증시 &#39;1경 원&#39; 사라졌다 / SBS / 모아보는 뉴스",
        description:
          "0:00:00 \"눈을 의심했습니다\"…'관세 충격'에 글로벌 증시 폭락 0:06:26 미 전역서 '트럼프 반대' 시위…\"손 떼라!\" #트럼프 #뉴욕증시 ...",
        channelId: "UCkinYTS9IHqOEwR1Sze2JTw",
        channelTitle: "SBS 뉴스",
        thumbnail: {
          url: "https://i.ytimg.com/vi/W0iXhgX3VzE/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2025-04-07T10:30:24Z",
        publishedAtDisplayText: "2일 전",
      },
      {
        videoId: "0dd7lML7K10",
        title: "🇺🇸 #3 미친 물가 화려한 뉴욕에서 나홀로 최저가 뉴욕 여행..",
        description:
          "본 영상에는 'Surfshark VPN'의 부분간접광고가 포함되어있습니다. https://surfshark.com/soy 사이트 이동하거나 VPN을 결제 시, 코드 ...",
        channelId: "UCugz3-UlkX2P77PtK1Ju0RA",
        channelTitle: "쏘이Soy The World",
        thumbnail: {
          url: "https://i.ytimg.com/vi/0dd7lML7K10/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2025-04-03T10:30:00Z",
        publishedAtDisplayText: "6일 전",
      },
      {
        videoId: "SXIZHS7RYKU",
        title: "🇺🇸 #1 왕복 70만원 무작정 나홀로 뉴욕 입국하다...",
        description:
          "본 영상은 유료광고를 포함하지 않습니다. ✈️ 쏘이 멤버십 가입해서 더더더 친해지기( . ̫ .)",
        channelId: "UCugz3-UlkX2P77PtK1Ju0RA",
        channelTitle: "쏘이Soy The World",
        thumbnail: {
          url: "https://i.ytimg.com/vi/SXIZHS7RYKU/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2025-03-20T11:00:40Z",
        publishedAtDisplayText: "2주 전",
      },
      {
        videoId: "tcqRkMCe6n8",
        title: "뉴욕 최악의 여행지 vs 인생여행지",
        description: "뉴욕 #브이로그.",
        channelId: "UCGFd35As_Z4u3SnNAGkcFvw",
        channelTitle: "내하루",
        thumbnail: {
          url: "https://i.ytimg.com/vi/tcqRkMCe6n8/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-09-25T08:55:48Z",
        publishedAtDisplayText: "6개월 전",
      },
      {
        videoId: "3E1WG7BNNFs",
        title:
          "[하이라이트] ※오해 금지※ 1년 아니고 &#39;한 학기&#39; 학비 맞습니다^^ ⭐뉴욕대 학생⭐이 직접! 푸는 &#39;미국 대학&#39;의 현실💰 | 톡파원 25시 | JTBC 250407 방송",
        description:
          "[하이라이트] ※오해 금지※ 1년 아니고 '한 학기' 학비 맞습니다^^ ⭐뉴욕대 학생⭐이 직접! 푸는 '미국 대학'의 현실   #톡파원25시 ...",
        channelId: "UCFL1sCAksD6_7JIZwwHcwjQ",
        channelTitle: "JTBC Entertainment",
        thumbnail: {
          url: "https://i.ytimg.com/vi/3E1WG7BNNFs/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2025-04-07T16:22:34Z",
        publishedAtDisplayText: "1일 전",
      },
      {
        videoId: "vk6014HuxcE",
        title: "JAY-Z - Empire State Of Mind ft. Alicia Keys",
        description:
          'Official music video for "Empire State Of Mind" performed by JAY-Z featuring Alicia Keys. Listen to JAY-Z: https://JAY-Z.LNK.',
        channelId: "UC_Bf08Y-3m6CMAvTms3EkKg",
        channelTitle: "JayZVEVO",
        thumbnail: {
          url: "https://i.ytimg.com/vi/vk6014HuxcE/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2021-12-04T05:00:17Z",
        publishedAtDisplayText: "3년 전",
      },
      {
        videoId: "uNj0KYMXbFk",
        title:
          "관세 소식에 뉴욕 증시 &#39;널뛰기&#39;...&quot;광란의 15분&quot; / YTN",
        description:
          "[앵커] 트럼프 미국 대통령이 중국을 뺀 모든 나라에 관세 부과를 90일간 중단하는 방안을 고려한다는 소식에 뉴욕 증시는 오전 한때 15 ...",
        channelId: "UChlgI3UHCOnwUGzWzbJ3H5w",
        channelTitle: " YTN",
        thumbnail: {
          url: "https://i.ytimg.com/vi/uNj0KYMXbFk/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2025-04-07T20:02:46Z",
        publishedAtDisplayText: "1일 전",
      },
      {
        videoId: "jIaX58wm7M8",
        title: "좋다가도 무서운 뉴욕 대기업의 현실 #뉴욕",
        description: "",
        channelId: "UC9k1vn9ErCoe7JngU6SubVw",
        channelTitle: "mina in york 미나",
        thumbnail: {
          url: "https://i.ytimg.com/vi/jIaX58wm7M8/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-11-30T12:43:11Z",
        publishedAtDisplayText: "1년 전",
      },
      {
        videoId: "sIHaXotO82E",
        title:
          "25.04.03 뉴욕증시 트럼프 상호관세 발표 시작 전 상승마감 , 시간 외 거래 급락",
        description:
          "25.04.03 뉴욕증시 트럼프 상호관세 발표 시작 전 상승마감 , 시간 외 거래 급락 안녕하세요. 파생감독입니다. 해외선물 매매로 수익을 ...",
        channelId: "UCDLBjgkCeKpoR0_lbxtejfg",
        channelTitle: "해외선물 파생감독",
        thumbnail: {
          url: "https://i.ytimg.com/vi/sIHaXotO82E/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2025-04-07T08:49:06Z",
        publishedAtDisplayText: "2일 전",
      },
      {
        videoId: "2peDuJjdrBU",
        title:
          "관세 소식에 뉴욕 증시 &#39;널뛰기&#39;...&quot;광란의 15분&quot; / YTN",
        description:
          "[앵커] 트럼프 미국 대통령이 중국을 뺀 모든 나라에 관세 부과를 90일간 중단하는 것을 고려한다는 보도에 백악관이 가짜 뉴스라고 ...",
        channelId: "UChlgI3UHCOnwUGzWzbJ3H5w",
        channelTitle: " YTN",
        thumbnail: {
          url: "https://i.ytimg.com/vi/2peDuJjdrBU/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2025-04-07T21:18:41Z",
        publishedAtDisplayText: "1일 전",
      },
      {
        videoId: "42DjMn00ymU",
        title:
          "NYC Uncut Raw Footage of 8th Avenue NYC&#39;s Roughest Avenue &quot;Strip of Despair&quot; Unfiltered NYC",
        description:
          'Unfiltered Raw Footage of NYC 8th Avenue "Strip of Despair" : Roughest Part of New York City Uncut Filmed August 16, 2024 ...',
        channelId: "UCFN_dQuFU6tXwVLXppqOwpA",
        channelTitle: "The NYC Walking Show",
        thumbnail: {
          url: "https://i.ytimg.com/vi/42DjMn00ymU/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-08-17T14:30:36Z",
        publishedAtDisplayText: "7개월 전",
      },
      {
        videoId: "-PML2LQZoJI",
        title: "뉴욕 최고 가성비 스테이크 (1인 가능)",
        description: "",
        channelId: "UCmOEGwUwgU8aYxhkUjof0yg",
        channelTitle: "뉴욕세끼 NYeat",
        thumbnail: {
          url: "https://i.ytimg.com/vi/-PML2LQZoJI/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2025-04-06T03:05:00Z",
        publishedAtDisplayText: "3일 전",
      },
      {
        videoId: "hgGlDovNMog",
        title: "Englishman In New York",
        description:
          "Provided to YouTube by Universal Music Group Englishman In New York · Sting ... Nothing Like The Sun ℗ 1987 UMG ...",
        channelId: "UCHhKCdsmx9t-PSqlSfa-VKA",
        channelTitle: "Sting - Topic",
        thumbnail: {
          url: "https://i.ytimg.com/vi/hgGlDovNMog/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2018-07-31T14:18:37Z",
        publishedAtDisplayText: "6년 전",
      },
      {
        videoId: "Xp67dGeEOLo",
        title:
          "[PLAYLIST] 이어폰을 끼는 순간 여긴 뉴욕 시티 ᖰʘ̅͜ʘ̅ᖳ : 뉴욕 감성 팝송 모음",
        description:
          "활기찬 뉴욕 팝송부터 뉴욕 감성 팝송까지 ! 모두 이 플리를 듣기 전에 뉴욕에 갈 마음의 준비를,,,",
        channelId: "UC3fPdi-N7Qx7Ytfw2XwRnaw",
        channelTitle: "ssing송",
        thumbnail: {
          url: "https://i.ytimg.com/vi/Xp67dGeEOLo/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2021-08-07T14:56:43Z",
        publishedAtDisplayText: "3년 전",
      },
      {
        videoId: "KFqS-20zJLQ",
        title:
          "[sub] EP.6 | 뉴욕 여행 막바지! 정유미의 쇼핑쇼핑부터 부동산 투어까지 l 🗽이서진의 뉴욕뉴욕2",
        description:
          "이제부터 이 프로그램은 유미 겁니다 (아님) #채널십오야 #이서진의뉴욕뉴욕2 #이서진 #유료광고포함.",
        channelId: "UCQ2O-iftmnlfrBuNsUUTofQ",
        channelTitle: "채널십오야",
        thumbnail: {
          url: "https://i.ytimg.com/vi/KFqS-20zJLQ/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-10-13T09:00:11Z",
        publishedAtDisplayText: "1년 전",
      },
      {
        videoId: "TzMcWznbkK4",
        title:
          "단 5초만에 뉴욕에 빠지게 만드는 영상! 놓치면 안되는 뉴욕여행 스팟들, 필수 뉴욕 여행 코스 가이드",
        description:
          "뉴욕 #미국여행 #여행지추천 뉴욕은 미국여행, 그 중에서도 미국동부를 여행한다면 빠질 수 없는 곳이죠. 최근에 이서진님과 나영석 ...",
        channelId: "UCmcoQYHyEkRDHApnLUoOqWQ",
        channelTitle: "여행가는시간",
        thumbnail: {
          url: "https://i.ytimg.com/vi/TzMcWznbkK4/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-10-17T06:00:11Z",
        publishedAtDisplayText: "1년 전",
      },
      {
        videoId: "FWKA9BgfvNs",
        title:
          "[sub] EP.1 | 4년 만에 더 다운그레이드(?) 되어 돌아왔습니다 l 🗽이서진의 뉴욕뉴욕2",
        description:
          "대단히 반갑습니다 상당히 고맙습니다 4년 전 대작 유튜브로 돌아왔습니다 이번엔 더 나불나불 대보려고요 그래서 우리가 이번에 어디 ...",
        channelId: "UCQ2O-iftmnlfrBuNsUUTofQ",
        channelTitle: "채널십오야",
        thumbnail: {
          url: "https://i.ytimg.com/vi/FWKA9BgfvNs/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-09-08T09:00:11Z",
        publishedAtDisplayText: "1년 전",
      },
      {
        videoId: "le1QF3uoQNg",
        title: "Theme From New York, New York (2008 Remastered)",
        description:
          "Provided to YouTube by Universal Music Group Theme From New York, New York (2008 Remastered) · Frank Sinatra Nothing But ...",
        channelId: "UC1zsfp3OD8qWQ0HfLbz2TXg",
        channelTitle: "Frank Sinatra - Topic",
        thumbnail: {
          url: "https://i.ytimg.com/vi/le1QF3uoQNg/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2018-12-12T11:31:53Z",
        publishedAtDisplayText: "6년 전",
      },
      {
        videoId: "t9ocfoAdWxo",
        title: "세계 최고의 도시, 뉴욕 현지인의 충격적인 이야기",
        description:
          "미국 영상은 총 3편입니다 :) 미국 여행 후에 중미, 남미 영상으로 찾아 뵙겠습니다 !",
        channelId: "UCaoqDZPllYXLAH_5OBRLLrw",
        channelTitle: "채코제 Channel Korean Jay",
        thumbnail: {
          url: "https://i.ytimg.com/vi/t9ocfoAdWxo/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2025-01-27T09:01:01Z",
        publishedAtDisplayText: "2개월 전",
      },
      {
        videoId: "V3WNpYUK9IM",
        title: "미친물가 뉴욕 택시 챌린지🇺🇸",
        description:
          "Email : kang20110306@gmail.com Instagram : https://www.instagram.com/walk.and/ Camera : Gopro12 Edit : Premiere Pro 2025 ...",
        channelId: "UCFqTaKJTCtdJuYBXUvonvWQ",
        channelTitle: "걷다가",
        thumbnail: {
          url: "https://i.ytimg.com/vi/V3WNpYUK9IM/default.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2025-03-14T09:00:40Z",
        publishedAtDisplayText: "3주 전",
      },
    ],
    nextPageToken: "CBQQAA",
    totalResults: 1000000,
  },
};
