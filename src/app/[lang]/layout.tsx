import {Box, Flex} from '@chakra-ui/react';
import type {Metadata} from 'next';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import {ReactNode} from 'react';
import {Footer} from '@/components/Footer';
import {Navbar} from '@/components/Navbar';
import AppProviders from '@/global/providers/AppProviders';
import {getStrapiMedia, getStrapiURL} from '@/shared/api/api-helpers';
import {getGlobal} from '@/shared/api/getGlobal';
import {DEFAULT_THEME} from '@/shared/const/defaultTheme';
import {FALLBACK_SEO} from '@/shared/const/fallbackSeo';
import {PageParams} from '@/shared/types/pageParams';
import {Section} from '@/shared/ui';
import {Alert} from '@/shared/ui/Alert/Alert';
import {NextBreadcrumb} from '@/shared/ui/BreadCrumbs';

export async function generateMetadata({params}: {params: {lang: string}}): Promise<Metadata> {
  const meta = await getGlobal(params.lang);
  if (!meta.data) return FALLBACK_SEO;
  const {seo, favicon} = meta.data;
  const {url} = favicon;
  const {url: openGraphUrl} = seo.metaImage;

  return {
    metadataBase: new URL(__FRONT_URL__),
    title: seo.metaTitle,
    description: seo.metaDescription,
    icons: {
      icon: [new URL(url, getStrapiURL())]
    },
    openGraph: {
      images: getStrapiURL(openGraphUrl)
    },
    keywords: seo.keywords,
    alternates: {
      canonical: seo.canonicalURL
    }
  };
}

interface RootLayoutProps {
  children: ReactNode;
  params: PageParams;
}

export default async function RootLayout({children, params}: RootLayoutProps) {
  const global = await getGlobal(params.lang);
  if (!global.data) return null;
  const cookieStore = cookies();
  const uiColorMode =
    (cookieStore.get('chakra-ui-color-mode')?.value as 'light' | 'dark') || DEFAULT_THEME;
  const {navbar, footer} = global.data;
  if (!navbar || !footer) return redirect('/');
  const navbarLogoUrl = getStrapiMedia(navbar.logo?.img.url);
  const footerLogoUrl = getStrapiMedia(footer.logo?.img.url);

  return (
    <html
      lang={params.lang}
      data-theme={uiColorMode}
      style={{colorScheme: uiColorMode, scrollBehavior: 'smooth'}}
    >
      <body>
        <AppProviders cookies={uiColorMode}>
          <Flex flexDirection={'column'} justifyContent={'space-between'} h={'100vh'}>
            <Navbar
              links={navbar?.links}
              buttons={navbar?.buttons}
              logoUrl={navbarLogoUrl}
              logoText={navbar?.logo?.label}
            />
            <Box as="main" pt={'var(--chakra-sizes-headerHeight)'}>
              <Section>
                <NextBreadcrumb homeElement="Головна" capitalizeLinks />
              </Section>
              {children}
            </Box>
            <Footer
              lang={params.lang}
              logoUrl={footerLogoUrl}
              logoText={footer?.logo?.label}
              footerLinks={footer?.links}
              legalLinks={footer.legalLinks}
              socialLinks={footer.socialLinks}
              {...footer}
            />
          </Flex>
          <Alert />
        </AppProviders>
      </body>
    </html>
  );
}
