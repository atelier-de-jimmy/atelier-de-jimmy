import { whyUsHomepage } from '@/constants';
import Image from 'next/image';
import React from 'react';

const WhyUs = () => {
  return (
    <section className="lg:max-w-7xl mx-auto px-[20px] section flex-col-center gap-8 bg-zinc-200/50 rounded-xl">
      <h2 className="sub-title">
        Pourquoi choisir <br /> L’Atelier de Jimmy
      </h2>
      {/* icons */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {whyUsHomepage.map(({ title, text, icon }, index) => (
          <li
            key={index}
            className="flex-col-center gap-6 border border-primary/50 rounded-xl p-6"
          >
            <Image
              src={icon}
              alt={title}
              className="p-2 bg-secondary rounded-lg flex items-center"
              width={60}
              height={60}
            />
            <h3 className="text-lg text-neutral-900 font-bold">{title}</h3>

            <p className="text-center text-neutral-800">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyUs;
