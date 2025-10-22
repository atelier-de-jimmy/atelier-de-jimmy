import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Garage automobile à Bergerac – L’Atelier de Jimmy',
    template: '%s | L’Atelier de Jimmy',
  },
  description:
    'L’Atelier de Jimmy, garage automobile à Bergerac, vous accueille pour l’entretien, la réparation et le diagnostic de véhicules toutes marques. Service de confiance et transparence assurée.',
  keywords: [
    'garage bergerac',
    'garagiste bergerac',
    'atelier de jimmy',
    'garage automobile bergerac',
    'réparation voiture bergerac',
    'entretien auto bergerac',
    'diagnostic automobile bergerac',
    'jimmy feltmann garagiste',
    'atelier mécanique bergerac',
  ],
  authors: [{ name: 'Jimmy Feltmann', url: 'https://atelier-de-jimmy.com/' }],
  creator: 'Jimmy Feltmann',
  publisher: 'Atelier de Jimmy',
  metadataBase: new URL('https://atelier-de-jimmy.com/'),
  alternates: {
    canonical: 'https://atelier-de-jimmy.com/',
  },
  openGraph: {
    title: 'Garage automobile à Bergerac – L’Atelier de Jimmy',
    description:
      'Votre garagiste de confiance à Bergerac : entretien, réparation et diagnostic toutes marques. Expertise, transparence et proximité depuis plus de 35 ans.',
    url: 'https://atelier-de-jimmy.com/',
    siteName: 'L’Atelier de Jimmy',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: 'https://atelier-de-jimmy.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Garage automobile à Bergerac – L’Atelier de Jimmy',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },

  category: 'Garage automobile',
};
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
