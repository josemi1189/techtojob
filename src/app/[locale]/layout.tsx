import { NextIntlClientProvider } from "next-intl";
import "@/assets/css/vendors/reset.css";
import "@/assets/css/vendors/normalize.css";
import "@/assets/css/base/global-styles.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { Header, Footer } from "@/layout";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function PublicLayout({ children, params }: Props) {
  const { locale } = await params;

  return (
    <>
      {process.env.NEXT_PUBLIC_COOKIE_SCRIPT && (
        <Script
          id="cookie-consent"
          src={`//cdn.cookie-script.com/s/${process.env.NEXT_PUBLIC_COOKIE_SCRIPT}.js`}
          strategy="afterInteractive"
        />
      )}
      <NextIntlClientProvider locale={locale}>
        <Header />
        <main>{children}</main>
        <Footer />
      </NextIntlClientProvider>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ANALYTICS_ID || ""} />
    </>
  );
}
