import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navigation from '@/components/navigation';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Julien - Escort masculin de prestige | Compagnie confidentielle',
  description: 'Une présence raffinée et discrète pour accompagner vos moments d\'exception, en toute élégance et confidentialité.',
  keywords: 'escort masculin, compagnie, prestige, discrétion, élégance, accompagnement',
  authors: [{ name: 'Julien' }],
  creator: 'Julien',
  publisher: 'Julien',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://julien-escort.com'),
  openGraph: {
    title: 'Julien - Escort masculin de prestige',
    description: 'Une présence raffinée et discrète pour accompagner vos moments d\'exception.',
    url: 'https://julien-escort.com',
    siteName: 'Julien Escort',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Julien Escort',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julien - Escort masculin de prestige',
    description: 'Une présence raffinée et discrète pour accompagner vos moments d\'exception.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-warm-cream text-warm-brown antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}