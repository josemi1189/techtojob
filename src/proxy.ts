import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Activa el middleware en la raíz
    "/",
    // Activa el middleware en todas las rutas con prefijo de idioma
    "/(es|en)/:path*",
    // Excluye archivos con extensiones (imagenes, iconos, etc) y carpetas de sistema
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
