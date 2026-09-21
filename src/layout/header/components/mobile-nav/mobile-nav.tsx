"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { MenuVM } from "@/config/";
import { cleanString } from "@/helpers/string";
import { useActiveSection } from "@/hooks/useActiveSection";

interface MobileNavProps {
  items: MenuVM[];
}

const normalize = (p?: string | null): string => {
  if (!p) return "/";
  // Quita prefijo de idioma (/es, /en...) y barra final
  const clean = p.replace(/^\/[a-z]{2}(?=\/|$)/, "").replace(/\/$/, "");
  return clean === "" ? "/" : clean;
};

export const MobileNav: React.FC<MobileNavProps> = ({ items }) => {
  const pathname = usePathname();
  const t = useTranslations("Nav");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const sectionIds = useMemo(
    () =>
      items
        .filter((item) => item.to === "#")
        .map((item) => cleanString(t(item.label))),
    [items, t]
  );

  const activeSection = useActiveSection(sectionIds);

  const isActive = (item: MenuVM): boolean => {
    if (item.to === "#") {
      return activeSection === cleanString(t(item.label));
    }
    // Enlaces de ruta (Inicio, etc.): activos solo si no hay sección activa
    return activeSection === "" && normalize(item.to) === normalize(pathname);
  };

  const base =
    "block w-full px-6 py-[18px] text-sm font-semibold no-underline transition-all duration-200 hover:bg-gray-100 hover:pl-[30px]";
  const activeClass = `${base} bg-secondary/10 border-l-4 border-secondary pl-5 text-secondary`;
  const inactiveClass = `${base} text-primary hover:text-secondary`;

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        type="button"
        className="group relative z-1001 flex flex-col gap-1.5 border-0 bg-transparent p-2.5 items-center md:hidden"
        onClick={toggleMenu}
        aria-label="Menú de navegación"
        aria-expanded={isOpen}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`h-0.75 w-7 rounded-sm bg-secondary transition-all duration-300 group-hover:bg-accent ${isOpen ? "bg-accent" : ""}`}
          />
        ))}
      </button>

      {/* Overlay de fondo */}
      {isOpen && (
        <div
          className="fixed inset-0 z-999 bg-black/50 transition-opacity duration-300 sm:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Menú desplegable */}
      <nav
        className={`fixed top-0 right-0 z-1000 h-screen w-60 overflow-y-auto bg-white shadow-[-2px_0_10px_#00000019] transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "pointer-events-none translate-x-full"}`}
      >
        <ul className="m-0 list-none pt-20">
          {items.map((item) => {
            const id = cleanString(t(item.label));
            const active = isActive(item);
            return (
              <li key={id} className="border-b border-secondary/10">
                <Link
                  href={item.to === "#" ? `/#${id}` : item.to}
                  aria-label={item.ariaLabel}
                  aria-current={active ? "true" : undefined}
                  className={active ? activeClass : inactiveClass}
                  onClick={closeMenu}
                >
                  {t(item.label)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
