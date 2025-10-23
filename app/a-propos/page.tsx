import Expertise from '@/components/about/Expertise';
import Hero from '@/components/about/Hero';
import Presentation from '@/components/about/Presentation';
import Values from '@/components/about/Values';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos de L’Atelier de Jimmy – Garagiste à Bergerac',
  description:
    'Découvrez l’histoire de Jimmy Feltmann, garagiste à Bergerac. Plus de 35 ans d’expérience au service de la qualité, de la confiance et de la proximité.',
  keywords: [
    'à propos garage bergerac',
    'jimmy feltmann',
    'atelier de jimmy',
    'garagiste bergerac',
    'garage automobile bergerac',
    'expérience mécanique bergerac',
    'garagiste de confiance',
    'électromécanicien bergerac',
  ],
  authors: [{ name: 'Jimmy Feltmann', url: 'https://atelier-de-jimmy.com/' }],
  creator: 'Jimmy Feltmann',
  publisher: 'L’Atelier de Jimmy',
  openGraph: {
    title: 'À propos de L’Atelier de Jimmy – Garagiste à Bergerac',
    description:
      'Depuis plus de 35 ans, Jimmy Feltmann met sa passion et son savoir-faire en mécanique et électromécanique au service des conducteurs à Bergerac. Confiance, qualité et proximité.',
    url: 'https://atelier-de-jimmy.com/a-propos',
    siteName: 'L’Atelier de Jimmy',
    type: 'article',
    locale: 'fr_FR',
    images: [
      {
        url: 'https://atelier-de-jimmy.com/og-a-propos.jpg',
        width: 1200,
        height: 630,
        alt: 'À propos de L’Atelier de Jimmy – Garagiste à Bergerac',
      },
    ],
  },
  alternates: {
    canonical: '/a-propos',
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
      <Presentation />
      <Values />
      <Expertise />
    </main>
  );
};

export default page;
