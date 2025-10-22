'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// -- Couleur personnalisée du marqueur (#8e0b1d)
const redPinSvg = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41">
    <path fill="#8e0b1d" stroke="white" stroke-width="2"
      d="M12.5,0C6,0,0,5.9,0,13.1c0,8.9,12.5,27.5,12.5,27.5S25,22,25,13.1C25,5.9,19,0,12.5,0z
         M12.5,19.7c-3.6,0-6.6-3-6.6-6.6s3-6.6,6.6-6.6s6.6,3,6.6,6.6S16.1,19.7,12.5,19.7z"/>
  </svg>
`);

const redIcon = L.icon({
  iconUrl: `data:image/svg+xml,${redPinSvg}`,
  iconSize: [30, 50], // Taille du marqueur
  iconAnchor: [15, 50], // Centre (horizontal) / bas (vertical)
  popupAnchor: [0, -60], // Décale le popup juste au-dessus du pin
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  shadowSize: [50, 64],
  shadowAnchor: [15, 64], // important aussi pour fixer l’ombre
});

export default function LeafletMap() {
  useEffect(() => {
    const DefaultIcon = L.icon({
      iconUrl: icon.src ?? icon,
      shadowUrl: iconShadow.src ?? iconShadow,
    });
    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);
  return (
    <section className="container section flex-col-center gap-8">
      <h2 className="sub-title">Trouver votre garagiste à Bergerac</h2>

      <MapContainer
        center={[44.856797661001586, 0.45945027828799845]}
        zoom={14}
        style={{ height: '600px', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[44.856797661001586, 0.45945027828799845]}
          icon={redIcon}
        >
          <Popup>L'Atelier de Jimmy</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}
