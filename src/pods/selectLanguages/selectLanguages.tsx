"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { FlagEsIcon, FlagEnIcon } from "@/common/atoms/icons";
import { useTranslations } from "next-intl";

export const SelectLanguages: React.FC = () => {
  const pathname = usePathname();
  const t = useTranslations("Nav");

  return (
    <div className="flex flex-row gap-4 w-fit">
      <Link
        className="border-0 bg-primary"
        href={pathname}
        locale="es"
        scroll={false}
        hrefLang="es"
        aria-label={t("btnChangeES")}
      >
        <FlagEsIcon />
      </Link>

      <Link
        className="border-0 bg-primary"
        href={pathname}
        locale="en"
        scroll={false}
        hrefLang="en"
        aria-label={t("btnChangeEN")}
      >
        <FlagEnIcon />
      </Link>
    </div>
  );
};
