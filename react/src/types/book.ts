export interface Book {
  id: number;
  title: string;
  author: string;
  year: number | null; // 정확한 연도를 알 수 없는 고전은 null
  categories: string[];
  description: string;
  cover: string;
}
