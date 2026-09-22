import { Locale } from "@/content/tournaments";
import { cleanString } from "@/helpers/string";
import { Hero, Steps, Talent, CompanySteps, Tournaments } from "@/pods";
import type { NextPage } from "next";
import { getTranslations } from "next-intl/server";

interface HomePageProps {
  params: {
    locale: Promise<Locale>;
  };
}

const HomePage: NextPage<HomePageProps> = async ({ params }) => {
  const t = await getTranslations("Nav");
  const { locale } = await params;
  return (
    <>
      <Hero />
      <Steps idNav={cleanString(t("steps"))} />
      <Talent idNav={cleanString(t("talent"))} />
      <CompanySteps idNav={cleanString(t("company"))} />
      <Tournaments idNav={cleanString(t("tournaments"))} locale={locale} />
    </>
  );
};

export default HomePage;
