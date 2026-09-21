import React from "react";
import { Tournaments } from "@/content/tournaments";
import { Button } from "@/common/atoms/button";
import { getTranslations } from "next-intl/server";

interface Props {
  tournament: Tournaments;
}
export const TournamentDetail: React.FC<Props> = async ({ tournament }) => {
  const t = await getTranslations("Tournaments");
  return (
    <article
      key={tournament.id}
      className="flex flex-row gap-5 p-4 w-full h-fit border border-secondary/50 bg-secondary/10 rounded-lg"
    >
      <div className="flex flex-row flex-wrap justify-between items-center w-full gap-4">
        <div>
          <header>
            <h3 className="py-2 text-xl font-semibold">
              <span className="font-bold">{`${t("tournament")} #${tournament.id}: `}</span>
              <span>{t(`${tournament.id}.title`)}</span>
            </h3>
          </header>
          <span>{t(`${tournament.id}.subtitle`)}</span>
        </div>
        <footer>
          <Button
            title={t(`${tournament.id}.nameLink`)}
            to={tournament.urlLink}
            internal={false}
            size="S"
            key={"id"}
          >
            {t(`${tournament.id}.nameLink`)}
          </Button>
        </footer>
      </div>
    </article>
  );
};
