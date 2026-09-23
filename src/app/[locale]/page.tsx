import { cleanString } from "@/helpers/string";
import { Locale } from "@/i18n/request";
import {
  Hero,
  Steps,
  Talent,
  CompanySteps,
  Tournaments,
  Networking,
  News,
  Testimonials,
} from "@/pods";
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
      <Networking idNav={cleanString(t("community"))} locale={locale} />
      <News idNav={cleanString(t("news"))} locale={locale} />
      <Testimonials idNav={cleanString(t("testimonials"))} locale={locale} />
    </>
  );
};

export default HomePage;
