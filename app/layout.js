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
  metadataBase: new URL('https://jayganeshfilms.example.com'),
  title: {
    default: 'Jay Ganesh Films Entertainment — Dance. Films. Culture.',
    template: '%s | Jay Ganesh Films Entertainment',
  },
  description:
    'Jay Ganesh Films Entertainment Pvt. Ltd. — a family of premium dance studios, cinematic events and cultural productions founded by Mukesh (Rudra) Chaudhari.',
  keywords: ['dance studio Pune','Hinjewadi dance classes','Bollywood dance','Kathak Pune','My Style Dance Studio','Shubh Dance Company','Tandav','Shubh Garba','Glamour Gateway','Mukesh Chaudhari','Jay Ganesh Films'],
  openGraph: {
    type: 'website',
    title: 'Jay Ganesh Films Entertainment',
    description: 'Dance. Films. Culture. Crafted since 1999.',
    images: ['/images/logo.png'],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable} dark`}>
      <body className="font-body grain">
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Toaster richColors position="top-center" theme="dark" />
      </body>
    </html>
  );
}