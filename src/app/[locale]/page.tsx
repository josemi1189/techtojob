import { Hero, Steps } from "@/pods";
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
    </>
  );
};

export default HomePage;
