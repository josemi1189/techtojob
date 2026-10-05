import { SectionProps } from "@/types";
import { ContentDarkLayout } from "@/layout";
import React from "react";
import { CategoriesNetworking } from "@/content/categories-networking";
import { Locale } from "@/i18n/request";
import { CategoryTitle, CategoryDetail } from "./components";

interface Props extends SectionProps {
  locale: Promise<Locale>;
}
export const Networking: React.FC<Props> = async ({ idNav, locale }) => {
  const data = CategoriesNetworking[await locale];
  return (
    <ContentDarkLayout
      title={data.sectionTitle}
      subtitle={data.sectionSubtitle}
      id={idNav}
      className="scroll-mt-32 flex w-full flex-col items-center justify-center gap-8 bg-linear-to-b from-third/15 via-third/10 to-transparent px-4 py-24 sm:px-6 sm:py-28 lg:py-32"
    >
      <ul className="py-10 px-2 flex flex-row flex-wrap justify-center md:justify-around xl:gap-x-16 w-full max-w-6xl gap-10">
        {data.categories.map((category) => (
          <li key={category.id}>
            <article className="reveal-card flex w-sm flex-col justify-self-center rounded-2xl border border-primary/5 bg-third p-5 text-left shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-md motion-reduce:transition-none">
              <CategoryTitle key={`cat-${category.id}`} category={category} />

              <CategoryDetail
                key={`det-${category.id}`}
                channels={category.channels}
              />
            </article>
          </li>
        ))}
      </ul>
    </ContentDarkLayout>
  );
};
