import React from "react";
import { getTranslations } from "next-intl/server";

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
];
export const CompanySteps: React.FC = async () => {
  const t = await getTranslations("CompanySteps");
  return (
    <section className="flex px-2 py-20 flex-col gap-6 items-center justify-center w-full ">
      <h2 className="text-5xl sm:text-6xl text-secondary font-black">
        {t("title")}
      </h2>
      <span className="text-3xl text-center text-white font-bold">
        {t("subtitle")}
      </span>
      <div className="pt-6 flex flex-row flex-wrap xl:gap-x-16 w-full justify-center max-w-6xl gap-10">
        {steps.map((step) => (
          <div
            key={step.title}
            className="flex w-72 h-56 flex-col justify-self-center rounded-xl border border-third/10 bg-third/10 p-4 text-left"
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
    </section>
  );
};
