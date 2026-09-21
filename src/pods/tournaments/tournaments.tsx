import React from "react";
import { getTranslations } from "next-intl/server";
import { ContentLightLayout } from "@/layout";
import { TournamentDetail } from "./components";
import { tournamentsData } from "@/content/tournaments";
import { SectionProps } from "@/common/common.vm";

export const Tournaments: React.FC<SectionProps> = async ({ idNav }) => {
  const t = await getTranslations("Tournaments");
  return (
    <ContentLightLayout id={idNav}>
      <h2 className="text-5xl sm:text-6xl text-secondary font-black">
        {t("title")}
      </h2>
      <span className="text-3xl text-center text-primary/80 font-bold">
        {t("subtitle")}
      </span>
      {tournamentsData.slice(-3).map((tournament) => (
        <TournamentDetail key={tournament.id} tournament={tournament} />
      ))}
    </ContentLightLayout>
  );
};
