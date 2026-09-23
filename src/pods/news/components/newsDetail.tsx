"use client";
import React from "react";
import { LanguageContent } from "@/types";
import { dateToIso } from "@/lib/date-to-iso";
import { useTranslations } from "next-intl";
import { NewsModal } from "./newsModal";

interface Props {
  detail: LanguageContent;
  publishDate: string;
}

export const NewsDetail: React.FC<Props> = ({ detail, publishDate }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const t = useTranslations("News");

  return (
    <>
      <footer className="pt-5 flex flex-col gap-4">
        <span className="bg-secondary/70 border border-secondary rounded-2xl py-1 px-2 w-fit text-sm">
          {detail.category}
        </span>
        <div className="flex flex-row justify-between">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span aria-hidden="true">📅</span>
            <time dateTime={dateToIso(publishDate)} className="text-gray-600">
              {publishDate}
            </time>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className={`inline-flex items-center justify-center font-black rounded-full border-2 border-secondary
      shadow-secondary/40 ring-4 ring-secondary/10 transition-colors duration-200 ease-out hover:text-third
       hover:bg-secondary hover:shadow-lg hover:shadow-secondary/40 focus-visible:outline-2
      focus-visible:outline-offset-4 focus-visible:outline-secondary px-4 py-1 text-md shadow-md`}
          >
            {t("btnAction")}
          </button>
        </div>
      </footer>
      <NewsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        contentNews={{
          title: detail.title,
          content: detail.fullContent,
          publishDate: publishDate,
        }}
      />
    </>
  );
};
