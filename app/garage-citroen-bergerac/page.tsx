import Contact from '@/components/citroen/Contact';
import Diagnostic from '@/components/citroen/Diagnostic';
import Expertise from '@/components/citroen/Expertise';
import Hero from '@/components/citroen/Hero';
import Location from '@/components/citroen/Location';
import Maintenance from '@/components/citroen/Maintenance';
import Reviews from '@/components/citroen/Reviews';
import Security from '@/components/citroen/Security';
import WhyUs from '@/components/citroen/WhyUs';
import React from 'react';
import type { Metadata } from 'next';
import CitroenServiceStructuredData from '@/components/CitroenServiceStructuredData';

export const metadata: Metadata = {
  title: 'Garage Citroën à Bergerac – L’Atelier de Jimmy',
  description:
    'L’Atelier de Jimmy, garage Citroën indépendant à Bergerac. Entretien, diagnostic et réparations de véhicules Citroën par un garagiste local expérimenté et honnête.',
  keywords: [
    'garage citroen bergerac',
    'citroen bergerac',
    'garagiste citroen bergerac',
    'atelier de jimmy citroen',
    'citroen c3 c4 c5 berlingo bergerac',
    'réparation citroen bergerac',
    'entretien citroen bergerac',
    'garage automobile bergerac',
    'jimmy feltmann',
  ],
  authors: [{ name: 'Jimmy Feltmann', url: 'https://atelier-de-jimmy.com/' }],
  creator: 'Jimmy Feltmann',
  publisher: 'L’Atelier de Jimmy',
  openGraph: {
    title: 'Garage Citroën à Bergerac – L’Atelier de Jimmy',
    description:
      'Garage Citroën indépendant à Bergerac. Entretien, réparation et diagnostic toutes marques Citroën, réalisés avec transparence et professionnalisme par Jimmy Feltmann.',
    url: 'https://atelier-de-jimmy.com/garage-citroen-bergerac',
    siteName: 'L’Atelier de Jimmy',
    type: 'article',
    locale: 'fr_FR',
    images: [
      {
        url: 'https://atelier-de-jimmy.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Garage Citroën à Bergerac – L’Atelier de Jimmy',
      },
    ],
  },
  alternates: {
    canonical: '/garage-citroen-bergerac',
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
    <main>
      <CitroenServiceStructuredData />
      <Hero />
      <Maintenance />
      <Expertise />
      <Diagnostic />
      <Security />
      <Reviews />
      <WhyUs />
      <Location />
      <Contact />
    </main>
  );
};

export default page;
