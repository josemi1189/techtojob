"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

const REVEAL_HIDDEN = "hidden";
const REVEAL_VISIBLE = "visible";

export const ScrollReveal = ({
  children,
  className = "",
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      element.dataset.revealState = REVEAL_VISIBLE;
      return;
    }

    element.dataset.revealState = REVEAL_HIDDEN;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        element.dataset.revealState = REVEAL_VISIBLE;
        observer.unobserve(element);
      },
      { threshold: 0.01, rootMargin: "0px 0px -3% 0px" }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      data-reveal-state={REVEAL_HIDDEN}
      className={["scroll-reveal", className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
};
