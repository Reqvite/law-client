import {Box, Flex} from '@chakra-ui/react';
import type {Metadata} from 'next';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import {ReactNode} from 'react';
import AppProviders from '@/global/providers/AppProviders';
import {getStrapiMedia, getStrapiURL} from '@/shared/api/api-helpers';
import {getGlobal} from '@/shared/api/getGlobal';
import {DEFAULT_THEME} from '@/shared/const/defaultTheme';
import {FALLBACK_SEO} from '@/shared/const/fallbackSeo';
import {PageParams} from '@/shared/types/pageParams';
import {Alert} from '@/shared/ui/Alert/Alert';
import {Footer} from '../components/Footer';
import {Navbar} from '../components/Navbar';

export async function generateMetadata({params}: {params: {lang: string}}): Promise<Metadata> {
  const meta = await getGlobal(params.lang);
  if (!meta.data) return FALLBACK_SEO;
  const {seo, favicon} = meta.data.attributes;
  const {url} = favicon.data.attributes;
  const {url: openGraphUrl} = seo.metaImage.data.attributes;

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
  const {navbar, footer} = global.data.attributes;
  if (!navbar || !footer) return redirect('/');
  const navbarLogoUrl = getStrapiMedia(navbar.logo?.img.data.attributes.url);
  const footerLogoUrl = getStrapiMedia(footer.logo?.img.data.attributes.url);

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
              logoText={navbar?.navbarLogo?.label}
            />
            <Box as="main">{children}</Box>
            <Footer
              lang={params.lang}
              logoUrl={footerLogoUrl}
              logoText={footer?.logo?.label}
              footerLinks={footer?.links}
              legalLinks={footer.legalLinks}
              socialLinks={footer.socialLinks}
            />
          </Flex>
          <Alert />
        </AppProviders>
      </body>
    </html>
  );
}
