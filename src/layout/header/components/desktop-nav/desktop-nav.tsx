"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { MenuVM } from "@/config";

interface Props {
  itemsMenu: MenuVM[];
}
export const DesktopNav: React.FC<Props> = ({ itemsMenu }) => {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const setClassLinkActive = (to: string): string => {
    if (to === pathname)
      return "border-2 px-2 py-2 text-primary border-secondary bg-secondary rounded-lg";

    return "border px-2 py-2 bg-primary border-secondary text-secondary hover:text-primary hover:border-secondary hover:bg-secondary rounded-lg";
  };

  return (
    <nav className="hidden sm:block">
      <ul className="flex flex-row gap-4 ">
        {itemsMenu.map((item) => (
          <li key={t(item.label)} className={setClassLinkActive(item.to!)}>
            <Link href={item.to!} title={item.label}>
              {t(item.label)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
