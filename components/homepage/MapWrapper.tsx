'use client';

import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('@/components/homepage/Map'), {
  ssr: false,
  loading: () => <p>Chargement de la carte...</p>,
});

export default function MapWrapper() {
  return <LeafletMap />;
}
