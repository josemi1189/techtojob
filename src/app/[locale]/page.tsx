import type { NextPage } from "next";

interface HomePageProps {
  params: {
    locale: Promise<string>;
  };
}

const HomePage: NextPage<HomePageProps> = () => {
  return <>Página principal</>;
};

export default HomePage;
