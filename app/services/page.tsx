import React from 'react';
import Hero from '@/components/services/Hero';
import Services from '@/components/services/Services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services automobiles à Bergerac – L’Atelier de Jimmy',
  description:
    'Découvrez tous les services de L’Atelier de Jimmy à Bergerac : entretien, diagnostic, réparations mécaniques, pneus, freinage, et pré-contrôle technique.',
  keywords: [
    'entretien auto bergerac',
    'réparation voiture bergerac',
    'diagnostic automobile bergerac',
    'freinage bergerac',
    'garage bergerac',
    'pré-contrôle technique bergerac',
    'garagiste bergerac',
    'atelier de jimmy',
    'jimmy feltmann',
  ],
  authors: [{ name: 'Jimmy Feltmann', url: 'https://atelier-de-jimmy.com/' }],
  creator: 'Jimmy Feltmann',
  publisher: 'L’Atelier de Jimmy',
  openGraph: {
    title: 'Services automobiles à Bergerac – L’Atelier de Jimmy',
    description:
      'Entretien, diagnostic et réparation toutes marques à Bergerac. Jimmy Feltmann, garagiste expérimenté, assure un service complet, transparent et de confiance.',
    url: 'https://atelier-de-jimmy.com/services',
    siteName: 'L’Atelier de Jimmy',
    type: 'article',
    locale: 'fr_FR',
    images: [
      {
        url: 'https://atelier-de-jimmy.com/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Services automobiles à Bergerac – L’Atelier de Jimmy',
      },
    ],
  },
  alternates: {
    canonical: '/services',
  },
  metadataBase: new URL('https://atelier-de-jimmy.com/'),
  robots: {
    index: true,
    follow: true,
  },
  category: 'Garage automobile',
};

const page = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
    </main>
  );
};

export default page;
