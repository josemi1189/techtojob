import { cleanString } from "@/helpers/string";
import { Link } from "@/i18n/navigation";
import { ItemsFooterProps } from "@/types/common.vm";
import { getTranslations } from "next-intl/server";
interface Props {
  listLink: ItemsFooterProps[];
  sectionName: string;
}
export const SectionLinks: React.FC<Props> = async ({
  listLink,
  sectionName,
}) => {
  const t = await getTranslations("Nav");

  return (
    <div className="flex flex-col gap-y-2 md:flex-col md:order-3">
      <span className="pt-2 font-semibold uppercase text-secondary">
        {t(sectionName)}
      </span>
      {listLink.map((item) => (
        <Link
          key={item.title}
          href={item.to === "#" ? `/#${cleanString(t(item.label))}` : item.to}
          title={t(item.title)}
          aria-label={t(item.ariaLabel)}
          className="inline-flex items-center gap-2 hover:text-accent before:content-[''] before:inline-block before:w-3.75 before:h-3.75 before:bg-[url('/info.svg')] before:bg-contain before:bg-no-repeat before:bg-center"
        >
          {t(item.label)}
        </Link>
      ))}
    </div>
  );
};
