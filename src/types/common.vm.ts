export interface SectionProps {
  idNav: string;
}

export interface SocialLinks {
  name: string;
  profileLink: string;
  icon: React.JSX.Element;
}

export interface ItemsFooterProps {
  to: string;
  title: string;
  ariaLabel: string;
  label: string;
  section: "talent" | "community" | "legal";
}
