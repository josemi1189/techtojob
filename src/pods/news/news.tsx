import { SectionProps } from "@/common";
import { ContentLightLayout } from "@/layout";
import React from "react";
import { newsData } from "@/content/news-data";
import { Locale } from "@/i18n/request";
import { NewsContent, NewsDetail } from "./components";
import { getTranslations } from "next-intl/server";
import { pickLanguage } from "@/lib/localize";
import * as VM from "@/types/news.vm";

interface Props extends SectionProps {
  locale: Promise<Locale>;
}
const content = (detail: VM.News, resolvedLocale: Locale) =>
  pickLanguage({ es: detail.es, en: detail.en }, resolvedLocale);

export const News: React.FC<Props> = async ({ idNav, locale }) => {
  const t = await getTranslations("News");
  const data: VM.News[] = newsData;
  const resolvedLocale = await locale;

  return (
    <ContentLightLayout title={t("title")} subtitle={t("subtitle")} id={idNav}>
      <ul className="py-10 px-2 flex flex-row flex-wrap justify-center md:justify-around w-full max-w-6xl gap-4">
        {data.map((newsItem) => (
          <li key={newsItem.id}>
            <article className="flex flex-col w-sm sm:w-md justify-self-center p-4 rounded-xl bg-third text-left">
              <NewsContent detail={content(newsItem, resolvedLocale)} />
              <NewsDetail
                detail={content(newsItem, resolvedLocale)}
                publishDate={newsItem.publishDate}
              />
            </article>
          </li>
        ))}
      </ul>
    </ContentLightLayout>
  );
};

{
  /* 

<li key={new.}>
            <article className="flex flex-col w-sm sm:w-md justify-self-center p-4 rounded-xl bg-third text-left">
              <CategoryTitle key={`cat-${category.id}`} category={category} />

              <CategoryDetail
                key={`det-${category.id}`}
                channels={category.channels}
              />
            </article>
          </li>*/
}
