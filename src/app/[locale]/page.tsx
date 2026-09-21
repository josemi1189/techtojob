import { cleanString } from "@/helpers/string";
import { Hero, Steps, Talent, CompanySteps, Tournaments } from "@/pods";
import type { NextPage } from "next";
import { getTranslations } from "next-intl/server";

interface HomePageProps {
  params: {
    locale: Promise<string>;
  };
}

const HomePage: NextPage<HomePageProps> = async () => {
  const t = await getTranslations("Nav");
  return (
    <>
      <Hero />
      <Steps idNav={cleanString(t("steps"))} />
      <Talent idNav={cleanString(t("talent"))} />
      <CompanySteps idNav={cleanString(t("company"))} />
      <Tournaments idNav={cleanString(t("tournaments"))} />
    </>
  );
};

export default HomePage;
