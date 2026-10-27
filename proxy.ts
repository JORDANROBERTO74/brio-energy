import { NextResponse, type NextRequest } from "next/server"
import { defaultLocale, isLocale, localeCookie, locales } from "@/i18n/config"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const first = pathname.split("/")[1]
  if (isLocale(first)) return NextResponse.next()

  const cookie = request.cookies.get(localeCookie)?.value
  const header = (request.headers.get("accept-language") ?? "").toLowerCase()
  const fromHeader = locales.find((locale) =>
    header.split(",").some((part) => part.trim().startsWith(locale)),
  )
  const locale = isLocale(cookie ?? "") ? (cookie as (typeof locales)[number]) : (fromHeader ?? defaultLocale)

  const target = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`
  return NextResponse.redirect(new URL(target, request.url))
}

export const config = {
  matcher: ["/((?!api|_next|images|.*\\..*).*)"],
}
