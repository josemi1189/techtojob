interface LanguageTestimonial {
  role: string;
  testimonial: string;
}
export interface Testimonial {
  id: number;
  name: string;
  socialLink: string;
  es: LanguageTestimonial;
  en: LanguageTestimonial;
}
