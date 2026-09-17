import Link from "next/link";
//import { useTranslations } from "next-intl";

export default function NotFound() {
  //const t = useTranslations();

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe.</p>
      <Link href="/" style={{ color: "#0066cc", textDecoration: "underline" }}>
        Volver al inicio
      </Link>
    </div>
  );
}
