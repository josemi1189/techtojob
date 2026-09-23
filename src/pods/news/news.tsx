import React from "react";
import { ContentLightLayout } from "@/layout";
import { newsData } from "@/content/news-data";
import { Locale } from "@/i18n/request";
import { getTranslations } from "next-intl/server";
import { NewsCard } from "./components";
import * as VM from "@/types";

interface Props extends VM.SectionProps {
  locale: Promise<Locale>;
}

export const News: React.FC<Props> = async ({ idNav, locale }) => {
  const t = await getTranslations("News");
  const data: VM.News[] = newsData;
  const resolvedLocale = await locale;

  return (
    <ContentLightLayout title={t("title")} subtitle={t("subtitle")} id={idNav}>
      <ul className="py-10 px-2 flex flex-row flex-wrap justify-center md:justify-around w-full max-w-6xl gap-6">
        {data.map((newsItem) => (
          <li key={newsItem.id}>
            <NewsCard newsItem={newsItem} resolvedLocale={resolvedLocale} />
          </li>
        ))}
      </ul>
    </ContentLightLayout>
  );
};
