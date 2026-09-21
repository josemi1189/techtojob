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
  {
    title: "step4.title",
    description: "step4.description",
  },
];
export const Steps = async () => {
  const t = await getTranslations("Steps");
  return (
    <section className="flex justify-center w-full bg-linear-to-b from-third/15 via-third/10 to-transparent pl-2 pr-2 pt-6 pb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-16 w-full justify-center max-w-6xl gap-10">
        {steps.map((step) => (
          <div
            key={step.title}
            className="flex w-72 h-60 flex-col justify-self-center  rounded-xl border border-third/10 bg-third/5 p-4 text-left"
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
