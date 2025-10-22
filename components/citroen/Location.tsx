import Image from 'next/image';
import React from 'react';
import { GridPattern } from '../ui/grid-pattern';
import { cn } from '@/lib/utils';

const Location = () => {
  return (
    <section className="relative container section flex-col-center gap-8">
      <Image
        src="/homepage/brands/citroen.svg"
        alt="citroen logo"
        width={90}
        height={90}
      />
      <h2 className="sub-title">Garage Citroën indépendant à Bergerac</h2>
      <p className="description">
        Que vous conduisiez une Citroën C1, une C3, une C4 Picasso, un Berlingo
        ou un Jumpy, votre véhicule trouvera à l’Atelier de Jimmy un entretien
        fiable, abordable et respectueux des normes constructeur. Le garage se
        consacre exclusivement aux véhicules légers, qu’il s’agisse de
        particuliers ou de petits utilitaires professionnels.
      </p>
      <p className="description">
        Situé à Bergerac, le garage accueille des clients venant aussi de
        Creysse, Prigonrieux, Lembras, Cours-de-Pile et Mouleydier, qui
        recherchent un garage Citroën de confiance, sans les contraintes des
        grandes enseignes.
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

export default Location;
