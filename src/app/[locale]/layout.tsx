import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import "@/assets/css/vendors/reset.css";
import "@/assets/css/vendors/normalize.css";
import "@/assets/css/base/global-styles.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function PublicLayout({ children, params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Script
        id="cookie-consent"
        src="//cdn.cookie-script.com/s/xxxx.js"
        strategy="afterInteractive"
      />
      <NextIntlClientProvider locale={locale}>
        {/*<Header />*/}
        <main>{children}</main>
        {/*<Footer />*/}
      </NextIntlClientProvider>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ANALYTICS_ID || ""} />
    </>
  );
}
