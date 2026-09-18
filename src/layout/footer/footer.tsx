import { Link } from "@/i18n/navigation";
import { routes } from "@/config";
import { useTranslations } from "next-intl";

export const Footer: React.FC = () => {
  const t = useTranslations("Nav");
  return (
    <footer className="flex flex-col items-center p-[0.8em] bg-primary w-full h-20 min-h-fit shadow-footer gap-[0.8em] text-third">
      <div className="flex flex-col justify-around gap-4 w-full md:flex-row">
        <div className="flex flex-col gap-y-2 md:flex-col md:order-1">
          <span className="p-2 font-semibold uppercase">{t("pages")}</span>
          <Link
            href={routes.about}
            title={t("aboutUs")}
            aria-label={t("aboutUs")}
            className="inline-flex items-center gap-2 hover:text-accent before:content-[''] before:inline-block before:w-3.75 before:h-3.75 before:bg-[url('/info.svg')] before:bg-contain before:bg-no-repeat before:bg-center"
          >
            {t("aboutUs")}
          </Link>
        </div>
        <div className="flex gap-x-4 p-4 items-center md:order-2">
          Enlaces redes sociales
          {/* svg class: w-[2.4em] hover:text-accent hover:cursor-pointer */}
        </div>
        <div className="flex flex-col gap-y-2 md:flex-col md:order-3">
          <span className="p-2 font-semibold uppercase">LEGAL</span>
          <Link
            href={routes.cookies}
            title={t("cookies")}
            aria-label={t("cookies")}
            className="inline-flex items-center gap-2 hover:text-accent before:content-[''] before:inline-block before:w-3.75 before:h-3.75 before:bg-[url('/info.svg')] before:bg-contain before:bg-no-repeat before:bg-center"
          >
            {t("cookies")}
          </Link>
          <Link
            href={routes.privacy}
            title={t("privacy")}
            aria-label={t("privacy")}
            className="inline-flex items-center gap-2 hover:text-accent before:content-[''] before:inline-block before:w-3.75 before:h-3.75 before:bg-[url('/info.svg')] before:bg-contain before:bg-no-repeat before:bg-center"
          >
            {t("privacy")}
          </Link>
        </div>
      </div>
      <div className="text-primary text-[0.9rem] text-right">
        <span>©2026 - {/*new Date().getFullYear()*/} TechToJob</span>
      </div>
    </footer>
  );
};
