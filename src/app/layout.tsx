import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
