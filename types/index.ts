export interface retrospectType {
  date: string;
  special: boolean;
  preview: {
    question: string;
    content: string;
  }[];
}
