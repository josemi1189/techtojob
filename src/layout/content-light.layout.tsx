import React from "react";

interface Props {
  children: React.ReactNode;
  id?: string;
}
export const ContentLightLayout: React.FC<Props> = ({ children, id }) => {
  return (
    <section
      id={id && id.toLowerCase()}
      className="scroll-mt-32 flex flex-col gap-8 items-center px-2 py-10 md:px-20 md:py-20 bg-third/95"
    >
      {children}
    </section>
  );
};
