import React from "react";
import { ScrollReveal } from "@/common/molecules/scroll-reveal";

interface Props {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  id?: string;
  className?: string;
}
export const ContentDarkLayout: React.FC<Props> = (props) => {
  const { id, title, subtitle, children, className } = props;
  return (
    <section
      id={id && id}
      className={
        className
          ? className
          : "scroll-mt-32 flex w-full flex-col items-center justify-center gap-8 px-4 py-24 sm:px-6 sm:py-28 lg:py-32"
      }
    >
      <ScrollReveal className="flex w-full flex-col items-center gap-8">
        <h2 className="text-balance text-center text-4xl font-black text-secondary after:mx-auto after:mt-5 after:block after:h-1 after:w-16 after:rounded-full after:bg-secondary/70 sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <span className="max-w-4xl text-balance text-center text-xl font-bold text-white/90 sm:text-2xl lg:text-3xl">
          {subtitle}
        </span>
        {children}
      </ScrollReveal>
    </section>
  );
};
