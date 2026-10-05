import { useTranslations } from "next-intl";
import * as CONSTANT from "@/constants";
import { Button } from "@/common/atoms/button";
import { ScrollReveal } from "@/common/molecules/scroll-reveal";

export const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <section className="relative isolate flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-secondary/15 px-4 py-24 text-white sm:px-8 md:rounded-4xl md:px-12 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-community.svg')" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(47,52,54,0.96)_0%,rgba(47,52,54,0.88)_48%,rgba(47,52,54,0.68)_100%)]"
      />
      <div
        aria-hidden="true"
        className="hero-glow absolute -right-24 -top-28 -z-10 size-96 rounded-full bg-secondary/15 blur-3xl"
      />
      <ScrollReveal className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-7 text-white">
        <span className="inline-flex items-center text-center rounded-full border border-secondary/40 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          {t("hero1")}
        </span>

        <h1 className="text-center text-5xl font-black tracking-tight text-third drop-shadow-lg md:text-8xl">
          {CONSTANT.appName}
        </h1>

        <p className="pt-5 text-center text-2xl leading-relaxed text-third md:text-5xl text-balance">
          {t("hero2")}
        </p>

        <p className="max-w-2xl pt-3 text-center text-xl leading-9 text-balance text-third/85 md:text-lg">
          {t("hero3")}
        </p>
        <Button
          to={CONSTANT.LINKS.discord}
          title="Ir a comunidad de Discord"
          internal={false}
          size="L"
        >
          {t("btnAction")}
        </Button>
      </ScrollReveal>
    </section>
  );
};
