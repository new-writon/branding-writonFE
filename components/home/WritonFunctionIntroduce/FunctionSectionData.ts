import { functionSectionDataType } from '@/types';
const image_retrospect_1 = '/image/mainPage/functionSection/img-1-writing.png';
const image_community_1 = '/image/mainPage/functionSection/img-2-community.png';
const image_community_2 = '/image/mainPage/functionSection/img-3-community.png';
const image_challenge_1 = '/image/mainPage/functionSection/img-4-challenge.png';
const image_smalltalk_1 = '/image/mainPage/functionSection/img-5-smalltalk.png';
const image_smalltalk_2 = '/image/mainPage/functionSection/img-6-smalltalk.png';

const image_community_icon_1 =
  '/image/mainPage/functionSection/icon/img-bubble-1.png';
const image_community_icon_2 =
  '/image/mainPage/functionSection/icon/img-bubble-2.png';
const image_community_icon_3 =
  '/image/mainPage/functionSection/icon/img-bubble-3.png';
const image_community_icon_fire =
  '/image/mainPage/functionSection/icon/img-fire.png';

export const FunctionIntroduceDummy: functionSectionDataType[] = [
  {
    name: '회고 작성',
    text: '함께 이야기하고 싶은 질문을\n 추가하고 회고해요!',
    image: [image_retrospect_1],
  },
  {
    name: '커뮤니티',
    text: '팀원들이 남긴\n 회고를 읽고 소통해요',
    image: [image_community_1, image_community_2],
    etc_image: [
      image_community_icon_1,
      image_community_icon_2,
      image_community_icon_3,
      image_community_icon_fire,
      image_community_icon_fire,
      image_community_icon_fire,
    ],
  },
  {
    name: '챌린지',
    text: '나의 회고를\n 편리하게 모아봐요',
    image: [image_challenge_1],
  },
  {
    name: '스몰톡',
    text: '가볍게 묻고 싶은 질문거리가\n 생긴다면 스몰톡에 올려봐요!',
    image: [image_smalltalk_1, image_smalltalk_2],
  },
];
