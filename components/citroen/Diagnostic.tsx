import { diagnosticCitroen } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { GridPattern } from '../ui/grid-pattern';
import { cn } from '@/lib/utils';

const Diagnostic = () => {
  return (
    <section className="relative container section flex-col-center gap-8">
      <Image
        src="/citroen/garage_citroen_bergerac_2.jpg"
        alt="garage citroen bergerac 2"
        width={500}
        height={300}
        className="rounded-lg"
      />
      <h2 className="sub-title">
        Diagnostic et réparations Citroën à Bergerac – L’expertise de votre
        garage
      </h2>
      <p className="description">
        Votre garage Citroën à Bergerac, l’Atelier de Jimmy, prend en charge
        toutes les réparations mécaniques sur les véhicules de la marque
        Citroën, qu’il s’agisse d’un modèle ancien ou récent. Grâce à plus de 35
        ans d’expérience en mécanique automobile, Jimmy met son savoir-faire au
        service de la fiabilité et de la performance de votre voiture Citroën.
      </p>
      <p className="description">
        À l’Atelier de Jimmy, chaque intervention est réalisée avec rigueur,
        dans le respect des préconisations du constructeur. Que vous conduisiez
        une Citroën C3, C4, C5, Berlingo ou Jumper, votre garagiste à Bergerac
        s’assure que votre véhicule reste sûr, réactif et agréable à conduire.
        Les réparations mécaniques les plus courantes effectuées dans le garage
        :
      </p>
      <ul className="flex flex-col">
        {diagnosticCitroen.map(({ text }, index) => (
          <li key={index} className="flex gap-4">
            {' '}
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
        L’objectif de votre garagiste à Bergerac est simple : assurer la
        longévité, la sécurité et la fiabilité de votre véhicule Citroën, tout
        en maintenant un tarif juste et transparent.
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

export default Diagnostic;
