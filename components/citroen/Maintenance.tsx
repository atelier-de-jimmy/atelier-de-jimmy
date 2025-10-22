import { maintenanceCitroen } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { GridPattern } from '../ui/grid-pattern';
import { cn } from '@/lib/utils';

const Maintenance = () => {
  return (
    <section className="relative container section flex-col-center gap-8">
      <h2 className="sub-title lg:max-w-2xl xl:max-w-5xl">
        Entretien Citroën à Bergerac - <br className="hidden xl:block" />{' '}
        Rigueur et Transparence dans votre garage
      </h2>
      <p className="description">
        Entretenir régulièrement votre Citroën est essentiel pour sa longévité
        et votre sécurité. À l’Atelier de Jimmy, chaque révision est réalisée
        selon les recommandations du carnet d’entretien Citroën :
      </p>
      <ul className="flex flex-col">
        {maintenanceCitroen.map(({ text }, index) => (
          <li key={index} className="flex gap-4">
            <Image
              src="/citroen/arrow.svg"
              alt="flèche droite"
              width={20}
              height={20}
            />
            <p className="text-base md:text-lg text-neutral-700">{text}</p>
          </li>
        ))}
      </ul>
      <p className="description">
        Toutes ces interventions sont documentées, expliquées et transparentes.
        Le client est systématiquement informé du coût, du délai et des pièces
        utilisées avant toute réparation. Cette approche claire et honnête, loin
        des mauvaises surprises, est au cœur de la réputation de Jimmy Feltmann.
      </p>
      <blockquote className="description italic">
        💬 “Jimmy est très sérieux et professionnel, donne de bons conseils. Il
        m'a fait une révision et un entretien sur ma C3 Aircross. Prestation de
        très bonne qualité à un prix très raisonnable qui m'a été recommandé par
        des amis. Je recommande à mon tour vivement ce professionnel” —
        Jean-Marie H., Bergerac
      </blockquote>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={'4 2'}
        className={cn(
          '[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]'
        )}
      />
    </section>
  );
};

export default Maintenance;
