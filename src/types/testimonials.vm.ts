export interface LanguageTestimonial {
  role: string;
  testimonial: string;
}
export type PlatformTypes =
  | "linkedin"
  | "discord"
  | "instagram"
  | "X"
  | "other";

export interface PlatformConfig {
  icon: React.ReactElement;
  label: string;
  platformClass: string;
}
export interface Testimonial {
  id: number;
  name: string;
  socialLink: string;
  platform: PlatformTypes;
  es: LanguageTestimonial;
  en: LanguageTestimonial;
}
