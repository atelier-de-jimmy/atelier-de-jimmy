// components/AutoRepairStructuredData.tsx
'use client';

import StructuredDataScript from '@/components/StructuredDataScript';

export default function LocalStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'L’Atelier de Jimmy',
    image: 'https://atelier-de-jimmy.com/og-image.jpg',
    url: 'https://atelier-de-jimmy.com/',
    telephone: '06 70 94 28 02',
    email: 'jimmyfeltmann24@gmail.com',
    description:
      'L’Atelier de Jimmy, garage automobile à Bergerac. Entretien, réparation et diagnostic de véhicules toutes marques par un garagiste local expérimenté reconnu pour son sérieux.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5 Route de la Force',
      addressLocality: 'Bergerac',
      postalCode: '24100',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.85757621516884,
      longitude: 0.45888218366700234,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:30',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.google.com/maps/place/Atelier+de+Jimmy/@44.8558436,0.4609819,17z/data=!4m6!3m5!1s0x12aad15f879aa3e1:0xbce76de701f7ec69!8m2!3d44.8563902!4d0.4593467!16s%2Fg%2F11v455d543?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D',
      'https://www.facebook.com/profile.php?id=61553135434377',
    ],
    founder: {
      '@type': 'Person',
      name: 'Jimmy Feltmann',
    },
    legalName: 'FELTMANN JIMMY',
    identifier: [
      {
        '@type': 'PropertyValue',
        propertyID: 'SIRET',
        value: '94906077600018',
      },
      { '@type': 'PropertyValue', propertyID: 'SIREN', value: '949060776' },
      { '@type': 'PropertyValue', propertyID: 'Code NAF', value: '4520A' },
    ],
    category: 'Garage automobile',
    areaServed: 'Bergerac et environs',
  };

  return <StructuredDataScript data={data} id="autorepair-jsonld" />;
}
