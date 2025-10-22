import Contact from '@/components/volkswagen/Contact';
import Expertise from '@/components/volkswagen/Expertise';
import Hero from '@/components/volkswagen/Hero';
import Location from '@/components/volkswagen/Location';
import Maintenance from '@/components/volkswagen/Maintenance';
import Reviews from '@/components/volkswagen/Reviews';
import Security from '@/components/volkswagen/Security';
import WhyUs from '@/components/volkswagen/WhyUs';
import React from 'react';
import type { Metadata } from 'next';
import VolkswagenServiceStructuredData from '@/components/VolkswagenServiceStructuredData';

export const metadata: Metadata = {
  title: 'Garage Volkswagen à Bergerac – L’Atelier de Jimmy',
  description:
    'L’Atelier de Jimmy, garage indépendant Volkswagen à Bergerac. Entretien, réparation et diagnostic de véhicules Volkswagen. Service local, honnête et professionnel.',
  keywords: [
    'garage volkswagen bergerac',
    'garagiste volkswagen bergerac',
    'entretien volkswagen bergerac',
    'réparation volkswagen bergerac',
    'diagnostic volkswagen bergerac',
    'atelier de jimmy',
    'jimmy feltmann',
    'volkswagen golf bergerac',
    'volkswagen polo bergerac',
    'volkswagen tiguan bergerac',
    'volkswagen passat bergerac',
    'volkswagen transporter bergerac',
  ],
  authors: [{ name: 'Jimmy Feltmann', url: 'https://atelier-de-jimmy.com/' }],
  creator: 'Jimmy Feltmann',
  publisher: 'L’Atelier de Jimmy',
  openGraph: {
    title: 'Garage Volkswagen à Bergerac – L’Atelier de Jimmy',
    description:
      'Garage indépendant à Bergerac spécialisé Volkswagen. Entretien, diagnostic et réparations sur Golf, Polo, Tiguan, Passat et Transporter par un garagiste local expérimenté.',
    url: 'https://atelier-de-jimmy.com/garage-volkswagen-bergerac',
    siteName: 'L’Atelier de Jimmy',
    type: 'article',
    locale: 'fr_FR',
    images: [
      {
        url: 'https://atelier-de-jimmy.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Garage Volkswagen à Bergerac – L’Atelier de Jimmy',
      },
    ],
  },
  alternates: {
    canonical: '/garage-volkswagen-bergerac',
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
    <>
      <VolkswagenServiceStructuredData />
      <Hero />
      <Maintenance />
      <Expertise />
      <Location />
      <Security />
      <Reviews />
      <WhyUs />
      <Contact />
    </>
  );
};

export default page;
