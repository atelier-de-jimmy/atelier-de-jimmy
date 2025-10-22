import { infosCitroenJimmy, infosVolkswagenJimmy } from '@/constants';
import React from 'react';

const WhyUs = () => {
  return (
    <section className="container section flex-col-center gap-8">
      <h2 className="sub-title">
        Pourquoi confier votre Volkswagen
        <br className="hidden lg:block" /> à L’Atelier de Jimmy ?
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl sm:mt-10">
        {infosVolkswagenJimmy.map(({ emoji, title, text }, index) => (
          <li
            key={index}
            className="flex-col-center gap-6 border border-primary/50 rounded-xl p-6"
          >
            <span className="text-xl">{emoji}</span>
            <h3 className="text-lg text-neutral-900 font-bold text-center">
              {title}
            </h3>
            <p className="text-center text-neutral-800">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyUs;
