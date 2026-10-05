import React from "react";
import { getTranslations } from "next-intl/server";
import { SectionProps } from "@/types";
import { ContentDarkLayout } from "@/layout";

interface Steps {
  title: string;
  description: string;
}
const steps: Steps[] = [
  {
    title: "step1.title",
    description: "step1.description",
  },
  {
    title: "step2.title",
    description: "step2.description",
  },
  {
    title: "step3.title",
    description: "step3.description",
  },
  {
    title: "step4.title",
    description: "step4.description",
  },
];
export const Steps: React.FC<SectionProps> = async ({ idNav }) => {
  const t = await getTranslations("Steps");
  return (
    <ContentDarkLayout
      id={idNav}
      title={t("title")}
      subtitle={t("subtitle")}
      className="scroll-mt-32 flex w-full flex-col items-center justify-center gap-8 bg-linear-to-b from-third/15 via-third/10 to-transparent px-4 py-24 sm:px-6 sm:py-28 lg:py-32"
    >
      <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-16 w-full justify-center max-w-6xl gap-10">
        {steps.map((step) => (
          <div
            key={step.title}
            className="reveal-card flex h-58 w-72 flex-col justify-self-center rounded-2xl border border-third/10 bg-third/5 p-5 text-left shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:bg-third/10 motion-reduce:transition-none"
          >
            <p className="text-md uppercase tracking-[0.2em] text-secondary">
              {t(step.title)}
            </p>
            <p className="mt-2 flex flex-1 items-center text-lg font-medium text-third">
              {t(step.description)}
            </p>
          </div>
        ))}
      </div>
    </ContentDarkLayout>
  );
};
