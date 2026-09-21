import React from "react";
import { getTranslations } from "next-intl/server";
import { ComputerPersonIcon, DoorIcon, LockIcon } from "@/common/atoms/icons";
import { ContentLightLayout } from "@/layout";
import { SectionProps } from "@/common/common.vm";

export const Talent: React.FC<SectionProps> = async ({ idNav }) => {
  const t = await getTranslations("talent");
  return (
    <ContentLightLayout id={idNav}>
      <h2 className="text-5xl sm:text-6xl text-secondary font-black">
        {t("title")}
      </h2>
      <span className="text-3xl text-center text-primary/80 font-bold">
        {t("subtitle")}
      </span>
      <div className="flex flex-col gap-5 p-4 w-full h-fit">
        <div>
          <h3 className="flex items-center gap-2 py-2 text-xl font-semibold">
            <span className="text-secondary text-3xl">
              <ComputerPersonIcon />
            </span>
            <span>{t("talent1")}</span>
          </h3>
          <p>{t("subtalent1")}</p>
        </div>
        <div>
          <h3 className="flex items-center gap-2 py-2 text-xl font-semibold">
            <span className="text-secondary text-3xl">
              <DoorIcon />
            </span>
            {t("talent2")}
          </h3>
          <p>{t("subtalent2")}</p>
        </div>
        <div>
          <h3 className="flex items-center gap-2 py-2 text-xl font-semibold">
            <span className="text-secondary text-3xl">
              <LockIcon />
            </span>
            {t("talent3")}
          </h3>
          <p>{t("subtalent3")}</p>
        </div>
      </div>
    </ContentLightLayout>
  );
};
