"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { MenuVM } from "@/config/";

interface MobileNavProps {
  items: MenuVM[];
}

export const MobileNav: React.FC<MobileNavProps> = ({ items }) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Nav");

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  /**
   * @param to Href for link
   * @returns Class name indicando si el enlace está activo o no.
   */
  const setClassLinkActive = (to: string): string => {
    const base =
      "block w-full px-6 py-[18px] text-sm font-semibold text-primary no-underline transition-all duration-200 hover:bg-gray-100 hover:pl-[30px] hover:text-secondary active:bg-[#e8e8e8]";
    if (to === pathname) return `${base} text-secondary`;
    return base;
  };

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        className="group flex flex-col gap-1.5 border-0 bg-transparent p-2.5 z-1001 items-center sm:hidden"
        onClick={toggleMenu}
        aria-label="Menú de navegación"
        aria-expanded={isOpen}
      >
        <span
          className={`h-0.75 w-7 rounded-sm bg-secondary transition-all duration-300 group-hover:bg-accent ${isOpen ? "bg-accent" : ""}`}
        />
        <span
          className={`h-0.75 w-7 rounded-sm bg-secondary transition-all duration-300 group-hover:bg-accent ${isOpen ? "bg-accent" : ""}`}
        />
        <span
          className={`h-0.75 w-7 rounded-sm bg-secondary transition-all duration-300 group-hover:bg-accent ${isOpen ? "bg-accent" : ""}`}
        />
      </button>

      {/* Overlay de fondo */}
      {isOpen && (
        <div
          className="fixed inset-0 z-999 bg-black/50 opacity-100 transition-opacity duration-300 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Menú desplegable */}
      <nav
        className={`block fixed top-0 z-1000 h-screen w-70 overflow-y-auto bg-white shadow-[-2px_0_10px_rgba(0,0,0,0.1)] transition-[right] duration-300 lg:hidden ${isOpen ? "right-0" : "-right-full"}`}
      >
        <ul className="m-0 list-none pt-20">
          {items.map((item, index) => (
            <li key={index} className="border-b border-secondary/10">
              <Link
                href={item.to}
                aria-label={item.ariaLabel}
                className={setClassLinkActive(item.to)}
                onClick={closeMenu}
              >
                {t(item.label)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
