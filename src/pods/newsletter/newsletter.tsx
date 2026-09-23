"use client";
import React from "react";
import { ContentLightLayout } from "@/layout";
import { SectionProps } from "@/types";
import { useTranslations } from "next-intl";
import { LockIcon } from "@/common";

export const Newsletter: React.FC<SectionProps> = ({ idNav }) => {
  const t = useTranslations("Newsletter");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setStatus("loading");

    // Simulación de envío (reemplaza con tu lógica de API o servidor)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };
  return (
    <ContentLightLayout title={t("title")} subtitle="" id={idNav}>
      <section className="flex flex-col items-center gap-10 w-3xl max-w-full text-center text-balance px-5 py-8 bg-black/5 border border-primary/90 rounded-2xl">
        <span className="text-2xl leading-12 text-primary/80 font-bold">
          {t("subtitle")}
        </span>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg flex flex-col gap-3"
        >
          <div className="flex flex-row grow">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("placeholderName")}
              required
              aria-label={
                t("ariaLabelForm") || "Correo electrónico para la newsletter"
              }
              className={`w-full px-4 py-2.5 rounded-full border-2 border-secondary bg-transparent text-primary placeholder:text-primary/40
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-all`}
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("placeholderEmail")}
              required
              aria-label={
                t("ariaLabelForm") || "Correo electrónico para la newsletter"
              }
              className={`w-full px-4 py-2.5 rounded-full border-2 border-secondary bg-transparent text-primary placeholder:text-primary/40
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-all`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`inline-flex items-center justify-center font-black rounded-full border-2 border-secondary
      shadow-secondary/40 ring-4 ring-secondary/10 transition-colors duration-200 ease-out hover:text-third
      hover:bg-secondary hover:shadow-lg hover:shadow-secondary/40 focus-visible:outline-2
      focus-visible:outline-offset-4 focus-visible:outline-secondary px-6 py-2.5 text-md shadow-md shrink-0 cursor-pointer disabled:opacity-50`}
          >
            {status === "loading"
              ? t("sending") || "Enviando..."
              : t("btnAction")}
          </button>
        </form>

        {/* Estados de feedback */}
        {status === "success" && (
          <p
            className="mt-4 text-sm text-green-600 dark:text-green-400 font-medium"
            role="status"
          >
            {t("successMessage")}
          </p>
        )}

        {status === "error" && (
          <p
            className="mt-4 text-sm text-red-600 dark:text-red-400 font-medium"
            role="status"
          >
            {t("errorMessage")}
          </p>
        )}
        <div className="flex w-full flex-row gap-2 text-sm text-primary/90">
          <span className="flex shrink-0 items-center">
            <LockIcon />
          </span>
          <span className="text-left">{t("unsubscribeText")}</span>
        </div>
      </section>
    </ContentLightLayout>
  );
};
