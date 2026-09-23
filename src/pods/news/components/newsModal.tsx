"use client";
import React from "react";
import { dateToIso } from "@/lib/date-to-iso";
import { ContentModalNews } from "@/types";
import { CloseIcon } from "@/common/atoms/icons/close.icon";
import { useTranslations } from "next-intl";

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentNews: ContentModalNews;
}

export const NewsModal: React.FC<NewsModalProps> = ({
  isOpen,
  onClose,
  contentNews,
}) => {
  const t = useTranslations("Nav");
  const titleRef = React.useRef<HTMLHeadingElement>(null);

  // Handle the Escape key, scroll locking, focus on the title, and aria-hidden on the background.
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Blocks background scrolling

      // 1. Hide main content from screen readers
      const mainContent =
        document.querySelector("main") ||
        document.getElementById("__next") ||
        document.getElementById("app");

      if (mainContent) {
        mainContent.setAttribute("aria-hidden", "true");
      }

      // 2. Move the focus to the modal title immediately.
      setTimeout(() => {
        titleRef.current?.focus();
      }, 50);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset"; // Restores scrolling upon closing

      // Restore main content for screen readers
      const mainContent =
        document.querySelector("main") ||
        document.getElementById("__next") ||
        document.getElementById("app");

      if (mainContent) {
        mainContent.removeAttribute("aria-hidden");
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-third rounded-2xl p-6 shadow-2xl text-primary outline-none">
        <header className="flex flex-row justify-between items-start pb-6">
          <h3
            ref={titleRef}
            id="modal-title"
            tabIndex={-1}
            className="text-2xl font-bold outline-none"
          >
            {contentNews.title}
          </h3>
          <button
            onClick={onClose}
            className="p-3 shrink-0 text-primary hover:text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={t("btnCloseModal")}
          >
            <CloseIcon />
          </button>
        </header>

        <div className="space-y-4">
          <p className="text-base leading-relaxed">{contentNews.content}</p>
          <time
            dateTime={dateToIso(contentNews.publishDate)}
            className="text-primary/60 block"
          >
            {contentNews.publishDate}
          </time>
        </div>
      </div>
    </div>
  );
};
