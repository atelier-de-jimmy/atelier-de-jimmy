import { brands } from '@/constants';
import { cn } from '@/lib/utils';
import React from 'react';
import { Marquee } from '@/components/ui/marquee';
import Image from 'next/image';
import Link from 'next/link';

const firstRow = brands.slice(0, brands.length);

const BrandsCard = ({ name, imgPath }: { name: string; imgPath: string }) => {
  return (
    <div
      className={cn(
        'relative h-full w-48 cursor-pointer overflow-hidden rounded-lg border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]'
      )}
    >
      <div className="flex flex-row items-center justify-center gap-6">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt={name}
          src={imgPath}
        />
        <span className="capitalize">{name}</span>
      </div>
    </div>
  );
};

const Brands = () => {
  return (
    <section className="container section flex-col-center gap-8">
      <h2 className="sub-title">Marques pris prends en charge</h2>
      <p className="description">
        Votre garage automobile à Bergerac assure l’entretien et la réparation
        de toutes marques de véhicules, que ce soit une{' '}
        <Link href="/garage-citroen-bergerac" className="font-bold">
          Citroën
        </Link>{' '}
        ou une{' '}
        <Link href="/garage-volkswagen-bergerac" className="font-bold">
          Volkswagen
        </Link>
        . Grâce à son expérience et à un matériel de diagnostic multi-marques,
        l’Atelier de Jimmy intervient aussi bien sur des voitures françaises que
        étrangères, anciennes ou récentes.
      </p>
      {/* brands */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:60s]">
          {firstRow.map((review) => (
            <BrandsCard key={review.name} {...review} />
          ))}
        </Marquee>{' '}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#f5f5f5]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#f5f5f5]" />
      </div>

      {/* warning */}
      <p className="text-sm italic text-center max-w-2xl text-neutral-700">
        Les marques citées et leurs logos sont la propriété de leurs détenteurs
        respectifs. L’Atelier de Jimmy est un garage indépendant, non affilié
        aux constructeurs automobiles.
      </p>
    </section>
  );
};

export default Brands;
