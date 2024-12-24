// Common Types
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl?: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  category: string;
  date: string;
}

export interface FatwaQuestion {
  id: string;
  question: string;
  answer: string;
  date: string;
  category: string;
}