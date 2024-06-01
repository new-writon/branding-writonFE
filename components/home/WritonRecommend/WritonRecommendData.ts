import { writonRecommendDataType } from '@/types';

const image_highfive = '/image/mainPage/icon-highfive.svg';
const image_talking = '/image/mainPage/icon-talking.svg';

export const WritonRecommendData: writonRecommendDataType[] = [
  {
    name: 'highfive',
    image: image_highfive,
    main_title: `팀과 함께 회고하며\n성장하고싶은 프로젝트 팀`,
    sub_title: `팀원들에게 묻고싶은 회고 질문이 있어요.\n팀원들의 회고를 편리하게 모아보고 소통하고 싶어요.`,
  },
  {
    name: 'talking',
    image: image_talking,
    main_title: `같은 관심 분야의 사람들과 기록을\n공유하며 인사이트를 넓히고 싶은 분들`,
    sub_title: `나의 관심분야에 대해 꾸준히 기록하고 싶어요.\n같은 관심분야를 가진 사람들과 공유하고 소통하고 싶어요.`,
  },
];
