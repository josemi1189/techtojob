import React from "react";

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
          : "scroll-mt-32 flex px-2 py-20 flex-col gap-6 items-center justify-center w-full "
      }
    >
      <h2 className="text-5xl sm:text-6xl text-center text-secondary font-black">
        {title}
      </h2>
      <span className="text-3xl text-center text-white font-bold">
        {subtitle}
      </span>
      {children}
    </section>
  );
};
