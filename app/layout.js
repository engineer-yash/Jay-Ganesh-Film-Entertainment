import './globals.css';
import { Fraunces, DM_Sans } from 'next/font/google';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import ScrollProgress from '@/components/site/ScrollProgress';
import { Toaster } from 'sonner';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: 'variable',
  axes: ['opsz', 'SOFT'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://jayganeshfilms.com'),
  title: {
    default: 'Jay Ganesh Films Entertainment — Dance Studios in Pune | Films & Events',
    template: '%s | Jay Ganesh Films Entertainment',
  },
  description:
    'Premium dance studios in Hinjewadi, Punawale & Tathawade, Pune. Bollywood, Hip-Hop, Kathak, Zumba, Kids Dance & more. Home of Tandav, Shubh Garba & Glamour Gateway — founded by Mukesh (Rudra) Chaudhari since 2003.',
  applicationName: 'Jay Ganesh Films Entertainment',
  authors: [{ name: 'Mukesh (Rudra) Chaudhari', url: 'https://www.instagram.com/mukesh_chaudhari3995/' }],
  creator: 'Jay Ganesh Films Entertainment Pvt. Ltd.',
  publisher: 'Jay Ganesh Films Entertainment Pvt. Ltd.',
  category: 'Arts & Entertainment',
  keywords: [
    // Location + intent (highest ranking value)
    'dance classes in Pune', 'dance studio Pune', 'dance academy Pune',
    'dance classes Hinjewadi', 'dance studio Hinjewadi', 'Hinjewadi Phase 1 dance',
    'dance classes Punawale', 'dance studio Punawale',
    'dance classes Tathawade', 'dance academy Tathawade',
    'Grand Highstreet dance studio', 'Latitude Mall dance Punawale',
    // Class types
    'Bollywood dance classes Pune', 'Hip Hop classes Pune', 'Zumba classes Pune',
    'Kathak classes Pune', 'semi-classical dance Pune', 'free style dance Pune',
    'kids dance classes Pune', 'guitar classes Hinjewadi', 'fitness classes Pune',
    'wedding choreography Pune', 'sangeet choreography Pune',
    // Brand
    'My Style Dance Studio', 'Shubh Dance Company', 'My Style Dance School',
    'Jay Ganesh Films', 'Jay Ganesh Films Entertainment',
    // Events
    'Tandav Dance Competition', 'Shubh Garba Raas Dandiya Pune',
    'Glamour Gateway Pune', 'Navratri Pune 2026', 'dance competition Pune',
    // People / awards
    'Mukesh Chaudhari', 'Mukesh Rudra Chaudhari', 'Boogie Woogie winner',
    // Services
    'dance hall rental Pune', 'workshop space Hinjewadi', 'choreographer Pune',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://jayganeshfilms.com',
    siteName: 'Jay Ganesh Films Entertainment',
    title: 'Jay Ganesh Films Entertainment — Dance. Films. Culture.',
    description:
      'Premium dance classes in Pune featuring Bollywood, Hip-Hop, Kathak, Zumba, Kids Dance & more. Founded by Mukesh (Rudra) Chaudhari since 2003.',
    images: [
      {
        url: 'https://res.cloudinary.com/dkinrfyq7/image/upload/v1784214229/imageedit_8_5841324216_alvcav.png',
        width: 1200,
        height: 630,
        alt: 'Jay Ganesh Films Entertainment — Dance Studios in Pune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jayganeshfilms',
    creator: '@mukesh_chaudhari3995',
    title: 'Jay Ganesh Films Entertainment',
    description: 'Premium dance studios, cinematic events & films — Pune.',
    images: ['https://res.cloudinary.com/dkinrfyq7/image/upload/v1784214229/imageedit_8_5841324216_alvcav.png'],
  },
  alternates: {
    canonical: 'https://jayganeshfilms.com',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN',
    // yandex: '...', bing: '...' (optional)
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  manifest: '/manifest.webmanifest',
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Pune',
    'geo.position': '18.5913;73.7389',
    'ICBM': '18.5913, 73.7389',
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable} dark`}>
      <body className="font-body grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://jayganeshfilms.com/#organization',
                  name: 'Jay Ganesh Films Entertainment Pvt. Ltd.',
                  alternateName: 'Jay Ganesh Films',
                  url: 'https://jayganeshfilms.com',
                  logo: 'https://jayganeshfilms.com/images/logo.png',
                  foundingDate: '2003',
                  founder: {
                    '@type': 'Person',
                    name: 'Mukesh (Rudra) Chaudhari',
                    jobTitle: 'Founder, Choreographer & Producer',
                    sameAs: ['https://www.instagram.com/mukesh_chaudhari3995/'],
                  },
                  contactPoint: [{
                    '@type': 'ContactPoint',
                    telephone: '+91-99239-51535',
                    contactType: 'customer service',
                    areaServed: 'IN',
                    availableLanguage: ['English', 'Hindi', 'Marathi'],
                  }],
                  sameAs: [
                    'https://www.instagram.com/my_styledstudio_/',
                    'https://www.instagram.com/my_style_dance_studio_punawale/',
                    'https://www.instagram.com/shubhdancecompany/',
                    'https://www.instagram.com/mystyledanceschool/',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://jayganeshfilms.com/#website',
                  url: 'https://jayganeshfilms.com',
                  name: 'Jay Ganesh Films Entertainment',
                  publisher: { '@id': 'https://jayganeshfilms.com/#organization' },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://jayganeshfilms.com/gallery?q={search_term_string}',
                    'query-input': 'required name=search_term_string',
                  },
                },
              ],
            }),
          }}
        />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Toaster richColors position="top-center" theme="dark" />
      </body>
    </html>
  );
}