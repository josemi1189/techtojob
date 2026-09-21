"use client";

import { useEffect, useState } from "react";
import { usePathname } from "@/i18n/navigation";

interface ActiveState {
  path: string;
  id: string;
}

const REFERENCE_LINE = 0.4; // 40% de la altura del viewport

/**
 * Devuelve el id de la sección activa según el scroll.
 * Devuelve "" cuando no hay ninguna (arriba del todo o en otra ruta).
 * @param sectionIds IDs de las secciones (sin "#"), en orden de aparición.
 */
export function useActiveSection(sectionIds: string[]): string {
  const pathname = usePathname();
  const [state, setState] = useState<ActiveState>({ path: "", id: "" });

  const key = sectionIds.join("|");

  useEffect(() => {
    const ids = key ? key.split("|") : [];
    if (ids.length === 0) return;

    const update = (id: string) =>
      setState((prev) =>
        prev.path === pathname && prev.id === id ? prev : { path: pathname, id }
      );

    const compute = () => {
      const elements = ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      if (elements.length === 0) {
        update("");
        return;
      }

      // Arriba del todo: ninguna sección activa, se activa "Inicio"
      if (window.scrollY < 50) {
        update("");
        return;
      }

      // Final de la página: última sección (por si es corta)
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      if (atBottom) {
        update(elements[elements.length - 1].id);
        return;
      }

      // Sección cuyo borde superior está más cerca por encima de la línea
      const line = window.innerHeight * REFERENCE_LINE;
      let current = "";
      let bestTop = -Infinity;

      for (const el of elements) {
        const top = el.getBoundingClientRect().top;
        if (top <= line && top > bestTop) {
          bestTop = top;
          current = el.id;
        }
      }

      update(current);
    };

    // Throttle con requestAnimationFrame
    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        compute();
      });
    };

    schedule(); // cálculo inicial, dentro de un callback
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [key, pathname]);

  return state.path === pathname ? state.id : "";
}
