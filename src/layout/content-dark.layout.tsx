import React from "react";

interface Props {
  children: React.ReactNode;
  id?: string;
}
export const ContentDarkLayout: React.FC<Props> = ({ children, id }) => {
  return (
    <section
      id={id && id}
      className="scroll-mt-20 flex px-2 py-20 flex-col gap-6 items-center justify-center w-full "
    >
      {children}
    </section>
  );
};
