import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale } from "@/lib/i18n";

/**
 * El español es el idioma principal y vive en la raíz: "/" sirve la página "/es"
 * sin cambiar la URL, y "/es" redirige a "/" para evitar contenido duplicado.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.rewrite(new URL(`/${defaultLocale}`, request.url));
  }
  if (pathname === `/${defaultLocale}`) {
    return NextResponse.redirect(new URL("/", request.url), 308);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/", "/es"] };
