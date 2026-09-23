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
      className="scroll-mt-32 flex px-2 py-20 flex-col gap-6 items-center justify-center w-full bg-linear-to-b from-third/15 via-third/10 to-transparent"
    >
      <ul className="py-10 px-2 flex flex-row flex-wrap justify-center md:justify-around xl:gap-x-16 w-full max-w-6xl gap-10">
        {data.categories.map((category) => (
          <li key={category.id}>
            <article className="flex flex-col w-sm sm:w-md justify-self-center p-4 rounded-xl bg-third text-left">
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
