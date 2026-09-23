import React from "react";
import { Button } from "@/common/atoms/button";
import { TournamentsVM } from "@/types";
import { getTranslations } from "next-intl/server";
import { pickLanguage as tLang } from "@/lib/localize";
import { Locale } from "@/i18n/request";

interface Props {
  tournament: TournamentsVM;
  locale: Promise<Locale>;
}
export const TournamentDetail: React.FC<Props> = async ({
  tournament,
  locale,
}) => {
  const t = await getTranslations("Tournaments");
  return (
    <article
      key={tournament.id}
      className="flex flex-row gap-5 p-4 w-full max-w-6xl h-fit border border-secondary/50 bg-secondary/10 rounded-lg"
    >
      <div className="flex flex-row flex-wrap justify-between items-center w-full gap-4">
        <div>
          <header>
            <h3 className="py-2 text-xl font-semibold">
              <span className="font-bold">{`${t("tournament")} #${tournament.id}: `}</span>
              <span>{tLang(tournament.title, await locale)}</span>
            </h3>
          </header>
          <span>{tLang(tournament.subtitle, await locale)}</span>
        </div>
        <footer>
          <Button
            title={tLang(tournament.linkLabel, await locale)}
            to={tournament.urlLink}
            internal={false}
            size="S"
            key={tournament.id}
          >
            {tLang(tournament.linkLabel, await locale)}
          </Button>
        </footer>
      </div>
    </article>
  );
};
