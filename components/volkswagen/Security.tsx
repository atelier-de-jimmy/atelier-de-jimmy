import { benefitsCitroen, benefitsVolkswagen } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Security = () => {
  return (
    <section className="container section flex flex-col items-center justify-center gap-8 xl:flex-row">
      <div className="w-full flex items-center xl:w-1/2">
        <Image
          src="/volkswagen/garage_volkswagen_bergerac_3.jpg"
          alt="garage volkswagen bergerac 3"
          width={480}
          height={400}
          className="rounded-lg w-[300px] sm:w-[350px] lg:w-[400px] xl:w-[500px] xl:mt-0 mx-auto"
        />
      </div>

      <div className="w-full xl:w-1/2 flex-col-center gap-8">
        {' '}
        <h2 className="sub-title">
          L’entretien Volkswagen à Bergerac sans perdre la garantie constructeur
        </h2>
        <p className="description">
          Contrairement à ce que certains pensent, faire entretenir son véhicule
          Volkswagen dans un garage indépendant ne fait pas perdre la garantie
          constructeur. Le règlement européen n° 461/2010 permet à tout garage
          qualifié de réaliser l’entretien et les réparations à condition de
          suivre les normes du constructeur. Cela signifie que vous pouvez
          confier votre Volkswagen à L’Atelier de Jimmy en toute tranquillité,
          tout en bénéficiant :
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitsVolkswagen.map(({ text, icon }, index) => (
            <li
              key={index}
              className="flex-col-center gap-6 border border-primary/50 rounded-xl p-6"
            >
              {' '}
              <Image
                src={icon}
                alt={text}
                className="p-2 bg-secondary rounded-lg flex items-center"
                width={60}
                height={60}
              />
              <p className="text-center text-neutral-800">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Security;
