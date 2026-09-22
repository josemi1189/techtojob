import React from "react";
import { getTranslations } from "next-intl/server";
import { ContentLightLayout } from "@/layout";
import { TournamentDetail } from "./components";
import { Locale, tournamentsData, TournamentsVM } from "@/content/tournaments";
import { SectionProps } from "@/common";

interface Props extends SectionProps {
  locale: Promise<Locale>;
}
export const Tournaments: React.FC<Props> = async ({ idNav, locale }) => {
  const t = await getTranslations("Tournaments");
  return (
    <ContentLightLayout id={idNav} title={t("title")} subtitle={t("subtitle")}>
      {tournamentsData.slice(-3).map((tournament: TournamentsVM) => (
        <TournamentDetail
          key={tournament.id}
          tournament={tournament}
          locale={locale}
        />
      ))}
    </ContentLightLayout>
  );
};
