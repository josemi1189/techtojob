import React from "react";
import { SectionProps } from "@/types";
import { Locale } from "@/i18n/request";
import { ContentDarkLayout } from "@/layout";
import { getTranslations } from "next-intl/server";
import { testimonialsData } from "@/content/testimonials-data";

import { pickLanguage } from "@/lib/localize";
import { TestimonialsDetail } from "./components/testimonials-detail";
import { getPlatformConfig } from "./testimonials.business";

interface Props extends SectionProps {
  locale: Promise<Locale>;
}

export const Testimonials: React.FC<Props> = async ({ idNav, locale }) => {
  const t = await getTranslations("Testimonials");
  const resolvedLocale = await locale;

  return (
    <ContentDarkLayout title={t("title")} subtitle={t("subtitle")} id={idNav}>
      <ul className="py-10 px-2 flex flex-row flex-wrap justify-center md:justify-around w-full max-w-6xl gap-6">
        {testimonialsData.map((testimony) => {
          const localizedContent = pickLanguage(testimony, resolvedLocale);
          const platformConfig = getPlatformConfig(testimony.platform);
          const ariaLabelText = `${t(platformConfig.label)} ${testimony.platform !== "other" ? testimony.platform : ""}`;

          return (
            <TestimonialsDetail
              key={testimony.id}
              localizedContent={localizedContent}
              platformConfig={platformConfig}
              testimony={testimony}
              ariaLabelText={ariaLabelText}
            />
          );
        })}
      </ul>
    </ContentDarkLayout>
  );
};
