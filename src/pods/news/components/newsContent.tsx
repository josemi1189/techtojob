import { LanguageContent } from "@/types/news.vm";
import React from "react";

interface Props {
  detail: LanguageContent;
}

export const NewsContent: React.FC<Props> = ({ detail }) => {
  return (
    <div>
      <header className="flex items-center gap-3 mb-4">
        <h3 className="font-bold text-lg tracking-wide">{detail.title}</h3>
      </header>
      <p className="text-primary/90 text-sm mb-6 leading-relaxed">
        {detail.summary}
      </p>
    </div>
  );
};
