import { Button } from "@/common";
import { LINK } from "@/constants/constant-link";
import { ContentDarkLayout } from "@/layout";
import { getTranslations } from "next-intl/server";
import React from "react";

export const PreFooter: React.FC = async () => {
  const t = await getTranslations("PreFooter");
  return (
    <ContentDarkLayout
      title={t("title")}
      subtitle={t("subtitle")}
      className="scroll-mt-32 flex px-2 py-20 flex-col gap-16 items-center justify-center w-full max-w-6xl "
    >
      <div className="pt-6 w-fit">
        <Button
          title={t("btnTitle")}
          to={LINK.discord}
          internal={false}
          size="L"
        >
          {t("btnAction")}
        </Button>
      </div>
    </ContentDarkLayout>
  );
};
