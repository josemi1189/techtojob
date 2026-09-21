import React from "react";
import { getTranslations } from "next-intl/server";
import { ContentLightLayout } from "@/layout";
import { TournamentDetail } from "./components";
import { tournamentsData } from "@/content/tournaments";
import { SectionProps } from "@/common/common.vm";

export const Tournaments: React.FC<SectionProps> = async ({ idNav }) => {
  const t = await getTranslations("Tournaments");
  return (
    <ContentLightLayout id={idNav} title={t("title")} subtitle={t("subtitle")}>
      {tournamentsData.slice(-3).map((tournament) => (
        <TournamentDetail key={tournament.id} tournament={tournament} />
      ))}
    </ContentLightLayout>
  );
};
