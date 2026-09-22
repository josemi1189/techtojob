export interface LanguageContent {
  title: string;
  category: string;
  summary: string;
  fullContent: string;
}

export interface News {
  id: number;
  filterKey: string;
  publishDate: string;
  es: LanguageContent;
  en: LanguageContent;
}
