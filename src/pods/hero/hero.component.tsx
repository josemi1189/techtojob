import { useTranslations } from "next-intl";
import * as constants from "@/constants";
import { Button } from "@/common/atoms/button";

export const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <section className="w-full pt-8 pb-16 md:px-12 md:pb-44">
      <div className="absolute inset-0 opacity-10 bg-[url(/hero.webp)] bg-cover bg-no-repeat"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white flex-col gap-10">
        <span className="mb-4 inline-flex items-center rounded-full border border-secondary/40 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          {t("hero1")}
        </span>

        <h1 className="text-5xl font-black tracking-tight text-third md:text-8xl">
          {constants.appName}
        </h1>

        <p className="mt-5 text-2xl leading-relaxed text-third md:text-5xl text-center text-balance">
          {t("hero2")}
        </p>

        <p className="mt-3 max-w-2xl text-xl leading-9 text-center text-balance text-third/75 md:text-lg">
          {t("hero3")}
        </p>
        <Button
          to="#"
          title="Ir a comunidad de Discord"
          internal={false}
          size="L"
        >
          {t("btnAction")}
        </Button>
      </div>
    </section>
  );
};
