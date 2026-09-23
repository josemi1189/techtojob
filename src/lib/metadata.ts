import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export interface PageMetadata {
  es: {
    title: string;
    description: string;
  };
  en: {
    title: string;
    description: string;
  };
}

export interface MetadataOptions {
  keywords?: {
    es: string;
    en: string;
  };
}

interface Params {
  locale: Promise<string>;
}

export async function generatePageMetadata(
  { params }: { params: Params },
  metadataConfig: PageMetadata,
  options: MetadataOptions = {}
): Promise<Metadata> {
  const { locale } = await params;
  const localeKey = locale.toString() === "en" ? "en" : "es";
  const metadata = metadataConfig[localeKey] || metadataConfig.es;
  const t = await getTranslations({ locale: localeKey, namespace: "Metadata" });

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
    title: metadata.title,
    description: metadata.description,
    ...(options.keywords && { keywords: options.keywords[localeKey] }),
    alternates: {
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      siteName: t("siteName"),
      type: "website",
      locale: localeKey === "en" ? "en_GB" : "es_ES",
      alternateLocale: localeKey === "en" ? "en_GB" : "es_ES",
      images: [
        {
          url: "/techtojob-social.webp",
          width: 1200,
          height: 1200,
          alt: t("imageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/techtojob-social.webp"],
    },
  };
}
