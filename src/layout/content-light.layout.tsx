import React from "react";
import { ScrollReveal } from "@/common/molecules/scroll-reveal";

interface Props {
  children: React.ReactNode;
  id?: string;
  title: string;
  subtitle: string;
}
export const ContentLightLayout: React.FC<Props> = (props) => {
  const { id, title, subtitle, children } = props;
  return (
    <section
      id={id && id.toLowerCase()}
      className="scroll-mt-32 flex flex-col items-center gap-8 bg-third/95 px-4 py-24 sm:px-6 sm:py-28 lg:gap-10 lg:py-32"
    >
      <ScrollReveal className="flex w-full flex-col items-center gap-8 lg:gap-10">
        <h2 className="text-balance text-center text-4xl font-black text-primary after:mx-auto after:mt-5 after:block after:h-1 after:w-16 after:rounded-full after:bg-secondary sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <span className="max-w-4xl text-balance text-center text-xl font-bold text-primary/80 sm:text-2xl lg:text-3xl">
          {subtitle}
        </span>
        {children}
      </ScrollReveal>
    </section>
  );
};
