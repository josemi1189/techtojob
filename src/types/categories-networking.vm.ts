// Structure of an individual channel
export interface Channel {
  name: string;
  description: string;
}

// Structure of a main category
export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  channels: Channel[];
}

// Complete content for a language
interface LanguageContent {
  sectionTitle: string;
  sectionSubtitle: string;
  categories: Category[];
}

// Global object that groups both languages
export interface CategoriesVM {
  es: LanguageContent;
  en: LanguageContent;
}
