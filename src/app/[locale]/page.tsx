import { Hero, Steps, Talent, CompanySteps } from "@/pods";
import type { NextPage } from "next";

interface HomePageProps {
  params: {
    locale: Promise<string>;
  };
}

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <>
      <Hero />
      <Steps />
      <Talent />
      <CompanySteps />
    </>
  );
};

export default HomePage;
