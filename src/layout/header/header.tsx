import { SelectLanguages } from "@/pods/selectLanguages";
//import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { DesktopNav } from "./components";
import { itemsMenu } from "@/config";
import { MobileNav } from "./components";

export const Header = async () => {
  const t = await getTranslations("Nav");
  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between min-h-20 bg-primary text-primary shadow-header text-[1.1rem] font-semibold px-1 md:px-12">
      <div className="shrink-0 p-2">
        <Image
          src="/icon.svg"
          alt={t("logoAlt")}
          width={64}
          height={64}
          className="block h-auto w-16 sm:hidden"
          loading="lazy"
        />
        <Image
          src="/logo.svg"
          alt={t("logoAlt")}
          width={240}
          height={64}
          className="hidden h-auto w-72.5 sm:block"
          loading="lazy"
        />
      </div>
      <section className="flex shrink-0 flex-row items-center gap-5">
        <DesktopNav itemsMenu={itemsMenu} />

        <SelectLanguages />
        <MobileNav items={itemsMenu} />
      </section>
      {/*<div className="basis-full lg:basis-auto"></div>*/}
    </header>
  );
};
