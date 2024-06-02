export interface retrospectType {
  date: string;
  special: boolean;
  preview: {
    question: string;
    content: string;
  }[];
}

export interface functionIconDataType {
  image: string;
  image_color: string;
  text: string;
}

export interface functionSectionDataType {
  name: string;
  text: string;
  image: string[];
  etc_image?: string[];
}

export interface functionSectionStateDataType {
  name: string;
  state: boolean;
}

export interface writonRecommendDataType {
  name: string;
  image: string;
  main_title: string;
  sub_title: string;
}

export interface writonFAQDataType {
  question: string;
  answer: string;
}
