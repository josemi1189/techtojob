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
    <header className="sticky top-0 z-50 w-full bg-primary text-primary shadow-header text-[1.1rem] font-semibold">
      <div className="mx-auto flex w-full max-w-7xl flex-row items-center justify-between gap-2 px-2 py-2 sm:px-4 md:gap-3 lg:px-8">
        <Image
          src="/icon.svg"
          alt={t("logoAlt")}
          width={64}
          height={64}
          className="block h-auto w-12 shrink-0 sm:hidden"
          loading="lazy"
        />
        <Image
          src="/logo.svg"
          alt={t("logoAlt")}
          width={240}
          height={64}
          className="hidden h-auto w-36 shrink-0 sm:block md:w-40 lg:w-52"
          loading="lazy"
        />
        <div className="hidden min-w-0 flex-1 justify-center md:flex">
          <DesktopNav itemsMenu={itemsMenu} />
        </div>
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <SelectLanguages />
          <MobileNav items={itemsMenu} />
        </div>
      </div>
    </header>
  );
};
