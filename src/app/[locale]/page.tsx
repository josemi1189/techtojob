import { Hero, Steps } from "@/pods";
import { Talent } from "@/pods/talent/talent";
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
    </>
  );
};

export default HomePage;
