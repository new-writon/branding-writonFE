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
