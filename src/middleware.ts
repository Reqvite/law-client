import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';
import {i18n} from './config/i18n/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const urlSearchParams = new URLSearchParams(request.nextUrl.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const urlParams = '?' + new URLSearchParams(params);

  if (pathname === '/robots.txt') {
    return;
  }
  if (pathname === '/sitemap.xml') {
    return;
  }
  if (pathname === '/googlec8e556cee04655b8.html') {
    return;
  }
  if (pathname.includes(i18n.defaultLocale)) {
    const newPathname = pathname.split('/');
    newPathname.splice(1, 1);
    return NextResponse.redirect(
      new URL(`${__FRONT_URL__}${newPathname.join('/')}${urlParams}`, request.url)
    );
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  const lang = pathname.split('/')[0] || i18n.defaultLocale;
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // const locale = getLocale(request); //if need change lang
    if (lang === i18n.defaultLocale) {
      return NextResponse.rewrite(
        new URL(
          `/${lang}${pathname.startsWith('/') ? '' : '/'}${pathname}${urlParams}`,
          request.url
        )
      );
    }
    return NextResponse.redirect(
      new URL(`/${lang}${pathname.startsWith('/') ? '' : '/'}${pathname}${urlParams}`, request.url)
    );
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
