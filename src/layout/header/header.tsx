import { Button } from "@/common/atoms/button";
import { SelectLanguages } from "@/pods/selectLanguages";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Header = () => {
  const t = useTranslations("Nav");
  return (
    <header className="sticky top-0 z-50 flex flex-row justify-between items-center h-20 min-h-fit bg-primary text-primary shadow-header text-[1.1rem] font-semibold px-1 md:px-12">
      <div className="max-w-[70dvw] p-1">
        <Image
          src="/logo.svg"
          alt={t("logoAlt")}
          width={290}
          height={64}
          className="w-72 h-auto"
          loading="lazy"
        />
      </div>

      <div className="flex items-center gap-4 w-fit">
        <SelectLanguages />
      </div>
      <div>
        <Button to="#" title={t("btnActionTitle")} internal={false} size="S">
          {t("btnActionName")}
        </Button>
      </div>
    </header>
  );
};
