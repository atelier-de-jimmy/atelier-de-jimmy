import Image from 'next/image';
import React from 'react';
import { GridPattern } from '../ui/grid-pattern';
import { cn } from '@/lib/utils';

const Location = () => {
  return (
    <section className="relative container section flex-col-center gap-8">
      <Image
        src="/volkswagen/garage_volkswagen_bergerac_4.jpg"
        alt="garage volkswagen bergerac 4"
        width={600}
        height={400}
        className="rounded-lg mx-auto z-20"
      />
      <h2 className="sub-title">
        Un garage indépendant <br className="hidden sm:block" /> pour les
        Volkswagen de Bergerac
      </h2>
      <p className="description">
        L’avantage d’un garage indépendant comme l’Atelier de Jimmy, c’est la
        proximité humaine et la flexibilité. Pas d’intermédiaires, pas de
        promesses floues : le diagnostic et les réparations sont faits
        directement par Jimmy, avec un contact franc et professionnel.
      </p>
      <p className="description">
        Cette approche plaît particulièrement aux propriétaires de Volkswagen,
        souvent attachés à la qualité et la durabilité. Beaucoup viennent de
        Bergerac, Creysse, Lembras ou Cours-de-Pile pour bénéficier d’un service
        local, fiable et sans artifice.
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
