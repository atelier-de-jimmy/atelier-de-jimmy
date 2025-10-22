import { maintenanceCitroen, maintenanceVolkswagen } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { GridPattern } from '../ui/grid-pattern';
import { cn } from '@/lib/utils';

const Maintenance = () => {
  return (
    <section className="relative container section flex-col-center gap-8">
      <h2 className="sub-title lg:max-w-2xl xl:max-w-5xl">
        Entretien Volkswagen à Bergerac - <br className="hidden xl:block" /> Le
        soin des véhicules bien conçus
      </h2>
      <p className="description">
        Les véhicules Volkswagen sont réputés pour leur fiabilité et leur
        longévité. Mais pour conserver ces qualités, un entretien rigoureux et
        régulier est indispensable. À l’Atelier de Jimmy, chaque révision est
        personnalisée selon le modèle, le kilométrage et l’utilisation du
        véhicule. Les prestations d’entretien proposées pour votre Volkswagen à
        Bergerac incluent notamment :
      </p>
      <ul className="flex flex-col">
        {maintenanceVolkswagen.map(({ text }, index) => (
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
        Chaque intervention est expliquée avant et après réalisation, avec un
        devis clair, sans frais cachés. C’est cette transparence qui fait la
        réputation de Jimmy Feltmann auprès des conducteurs de Volkswagen de
        Bergerac.
      </p>

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
