import { Button } from "@/common";
import { LINKS } from "@/constants";
import { ContentDarkLayout } from "@/layout";
import { getTranslations } from "next-intl/server";
import React from "react";

export const PreFooter: React.FC = async () => {
  const t = await getTranslations("PreFooter");
  return (
    <ContentDarkLayout
      title={t("title")}
      subtitle={t("subtitle")}
      className="scroll-mt-32 flex w-full flex-col items-center justify-center gap-12 px-4 py-24 sm:px-6 sm:py-28 lg:gap-16 lg:py-32"
    >
      <div className="reveal-card pt-6 w-fit">
        <Button
          title={t("btnTitle")}
          to={LINKS.discord}
          internal={false}
          size="L"
        >
          {t("btnAction")}
        </Button>
      </div>
    </ContentDarkLayout>
  );
};
