import Brands from '@/components/homepage/Brands';
import Contact from '@/components/homepage/Contact';
import Faq from '@/components/homepage/Faq';
import Hero from '@/components/homepage/Hero';
import Jimmy from '@/components/homepage/Jimmy';
import MapWrapper from '@/components/homepage/MapWrapper';
import Reviews from '@/components/homepage/Reviews';
import Services from '@/components/homepage/Services';
import WhyUs from '@/components/homepage/WhyUs';
import type { Metadata } from 'next';
import StructuredDataScript from '@/components/StructuredDataScript';
import { faq } from '@/constants';
import LocalStructuredData from '@/components/LocalStructuredData';

export const metadata: Metadata = {
  title: 'Garage automobile à Bergerac – L’Atelier de Jimmy',
  description:
    'L’Atelier de Jimmy, garage automobile à Bergerac. Entretien, réparation et diagnostic de véhicules toutes marques par un garagiste local expérimenté reconnu pour son sérieux.',
  keywords: [
    'garage bergerac',
    'garagiste bergerac',
    'atelier de jimmy',
    'garage automobile bergerac',
    'réparation voiture bergerac',
    'entretien auto bergerac',
    'diagnostic automobile bergerac',
    'jimmy feltmann garagiste',
  ],
  authors: [{ name: 'Jimmy Feltmann', url: 'https://atelier-de-jimmy.com/' }],
  creator: 'Jimmy Feltmann',
  publisher: 'Atelier de Jimmy',
  openGraph: {
    title: 'Garage automobile à Bergerac – L’Atelier de Jimmy',
    description:
      'Votre garagiste de confiance à Bergerac : entretien, réparation et diagnostic toutes marques par Jimmy Feltmann. Transparence, qualité et proximité.',
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
  metadataBase: new URL('https://atelier-de-jimmy.com/'),
  alternates: {
    canonical: 'https://atelier-de-jimmy.com/',
  },

  robots: {
    index: true,
    follow: true,
  },
  category: 'Garage automobile',
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <main>
      <LocalStructuredData />
      <StructuredDataScript data={faqStructuredData} id="faq-jsonld" />
      <Hero />
      <Services />
      <WhyUs />
      <Jimmy />
      <Reviews />
      <MapWrapper />
      <Brands />
      <Faq />
      <Contact />
    </main>
  );
}
