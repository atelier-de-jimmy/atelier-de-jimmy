'use client';
import StructuredDataScript from '@/components/StructuredDataScript';

export default function CitroenServiceStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Entretien et réparation Citroën à Bergerac',
    provider: {
      '@type': 'AutoRepair',
      name: 'L’Atelier de Jimmy',
      url: 'https://atelier-de-jimmy.com/',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5 Route de la Force',
        addressLocality: 'Bergerac',
        postalCode: '24100',
        addressCountry: 'FR',
      },
      telephone: '06 70 94 28 02',
    },
    areaServed: 'Bergerac et alentours',
    description:
      'Service dédié Citroën à Bergerac : entretien, diagnostic et réparation de véhicules Citroën C3, C4, C5, Berlingo et Jumper.',
    sameAs: [
      'https://www.google.com/maps/place/Atelier+de+Jimmy/@44.8558436,0.4609819,17z/data=!4m6!3m5!1s0x12aad15f879aa3e1:0xbce76de701f7ec69!8m2!3d44.8563902!4d0.4593467!16s%2Fg%2F11v455d543?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D',
      'https://www.facebook.com/profile.php?id=61553135434377',
    ],
  };

  return <StructuredDataScript data={data} id="citroen-service-jsonld" />;
}
