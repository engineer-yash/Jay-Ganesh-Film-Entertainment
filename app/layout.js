import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

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
    <html lang="en" className={`${inter.variable} ${playfair.variable} dark`}>
      <body className="font-body grain">
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
