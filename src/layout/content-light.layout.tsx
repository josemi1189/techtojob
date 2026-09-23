import React from "react";

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
      className="scroll-mt-32 flex flex-col gap-8 items-center px-2 py-10 md:px-20 md:py-20 bg-third/95"
    >
      <h2 className="text-5xl sm:text-6xl text-primary font-black">{title}</h2>
      <span className="text-3xl text-center text-primary/80 font-bold">
        {subtitle}
      </span>
      {children}
    </section>
  );
};
