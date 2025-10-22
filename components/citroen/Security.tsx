import { benefitsCitroen } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Security = () => {
  return (
    <section className="container section flex flex-col items-center justify-center gap-8 xl:flex-row">
      <div className="w-full flex items-center xl:w-1/2">
        <Image
          src="/citroen/garage_citroen_bergerac_4.jpg"
          alt="garage citroen bergerac 3"
          width={480}
          height={400}
          className="rounded-lg w-[300px] sm:w-[350px] lg:w-[400px] xl:w-[500px] xl:mt-0 mx-auto"
        />
      </div>

      <div className="w-full xl:w-1/2 flex-col-center gap-8">
        {' '}
        <h2 className="sub-title">
          Entretien Citroën : sécurité et garantie constructeur préservée
        </h2>
        <p className="description">
          Contrairement à une idée reçue, vous n’êtes pas obligé de passer par
          un garage agréé Citroën pour entretenir votre véhicule. Grâce au
          règlement européen n° 461/2010, les réparations et entretiens réalisés
          par un garage indépendant respectant les normes constructeur ne font
          pas perdre la garantie constructeur. Ainsi, faire entretenir votre
          Citroën à l’Atelier de Jimmy, c’est :
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitsCitroen.map(({ text, icon }, index) => (
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
