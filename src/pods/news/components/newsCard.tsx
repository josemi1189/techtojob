import React from "react";
import { NewsContent } from "./newsContent";
import { NewsDetail } from "./newsDetail";
import { pickLanguage } from "@/lib/localize";
import { Locale } from "@/i18n/request";
import * as VM from "@/types";

interface Props {
  newsItem: VM.News;
  resolvedLocale: Locale;
}

export const NewsCard: React.FC<Props> = ({ newsItem, resolvedLocale }) => {
  const detailContent = pickLanguage(newsItem, resolvedLocale);
  return (
    <>
      <article className="flex flex-col w-full max:w-3xl justify-self-center p-4 rounded-xl bg-third text-left">
        <NewsContent detail={detailContent} />
        <NewsDetail detail={detailContent} publishDate={newsItem.publishDate} />
      </article>
    </>
  );
};
