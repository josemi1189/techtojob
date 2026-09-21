"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { MenuVM } from "@/config";
import { Link, usePathname } from "@/i18n/navigation";
import { cleanString } from "@/helpers/string";
import { useActiveSection } from "@/hooks/useActiveSection";

interface Props {
  itemsMenu: MenuVM[];
}

const normalize = (p?: string | null): string => {
  if (!p) return "/";
  // Quita prefijo de idioma (/es, /en...) y barra final
  const clean = p.replace(/^\/[a-z]{2}(?=\/|$)/, "").replace(/\/$/, "");
  return clean === "" ? "/" : clean;
};

export const DesktopNav: React.FC<Props> = ({ itemsMenu }) => {
  const t = useTranslations("Nav");
  const pathname = usePathname();

  const sectionIds = useMemo(
    () =>
      itemsMenu
        .filter((item) => item.to === "#")
        .map((item) => cleanString(t(item.label))),
    [itemsMenu, t]
  );

  const activeSection = useActiveSection(sectionIds);

  const isActive = (item: MenuVM): boolean => {
    if (item.to === "#") {
      return activeSection === cleanString(t(item.label));
    }
    // Enlaces de ruta (Inicio, etc.): activos solo si no hay sección activa
    return activeSection === "" && normalize(item.to) === normalize(pathname);
  };

  const commonClass =
    "px-2 py-2 rounded-lg border-secondary/50 transition-colors text-sm lg:text-lg font-extrabold";
  const activeClass = `${commonClass} border-2 text-primary bg-secondary`;
  const inactiveClass = `${commonClass} border bg-primary text-secondary hover:text-primary hover:bg-secondary`;

  return (
    <nav className="hidden md:block">
      <ul className="flex flex-row gap-2">
        {itemsMenu.map((item) => {
          const id = cleanString(t(item.label));
          const active = isActive(item);
          return (
            <li key={id} className={active ? activeClass : inactiveClass}>
              <Link
                href={item.to === "#" ? `/#${id}` : item.to!}
                title={item.label}
                aria-current={active ? "true" : undefined}
              >
                {t(item.label)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
