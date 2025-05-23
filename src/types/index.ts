export type ValueStackItem = {
  id: number;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
};

export type CoreValue = {
  id: number;
  title: string;
  description: string;
};

export type FAQ = {
  id: number;
  question: string;
  answer: string;
};