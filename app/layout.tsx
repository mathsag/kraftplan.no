import type { Metadata } from 'next';
import { Fraunces, Inter_Tight } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const inter = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kraftplan.no'),
  title: {
    default: 'Kraftplan AS — Spesialister på småkraftutvikling',
    template: '%s · Kraftplan',
  },
  description:
    'Effektiv planlegging, bærekraftig kraft. Kraftplan utvikler konsesjonssøknader, mulighetsstudier og konsekvensutredninger for småkraftverk i Norge.',
  keywords: [
    'småkraft',
    'konsesjonssøknad',
    'NVE',
    'kraftverk',
    'konsekvensutredning',
    'planendringssøknad',
    'mulighetsstudie',
    'vannkraft',
  ],
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    siteName: 'Kraftplan AS',
    title: 'Kraftplan AS — Spesialister på småkraftutvikling',
    description: 'Effektiv planlegging, bærekraftig kraft.',
  },
  alternates: {
    canonical: 'https://kraftplan.no',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
