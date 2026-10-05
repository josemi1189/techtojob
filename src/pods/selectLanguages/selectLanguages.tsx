"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

export const SelectLanguages: React.FC = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Nav");

  const linkClasses = `grid min-h-8 min-w-10 place-items-center rounded-[50%] text-xs font-bold tracking-wider
      text-primary no-underline transition-colors duration-[160ms] ease-in-out hover:bg-secondary
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
        motion-reduce:transition-none aria-[current=page]:bg-primary aria-[current=page]:text-white 
        aria-[current=page]:hover:bg-primary`;

  return (
    <nav
      className="flex items-center gap-1 p-1 rounded-full border border-primary bg-third"
      aria-label={t("languageSelector")}
    >
      <Link
        className={linkClasses}
        href={pathname}
        locale="es"
        scroll={false}
        hrefLang="es"
        aria-label={t("btnChangeES")}
        aria-current={locale === "es" ? "page" : undefined}
      >
        ES
      </Link>

      <Link
        className={linkClasses}
        href={pathname}
        locale="en"
        scroll={false}
        hrefLang="en"
        aria-label={t("btnChangeEN")}
        aria-current={locale === "en" ? "page" : undefined}
      >
        EN
      </Link>
    </nav>
  );
};
