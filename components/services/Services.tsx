import { garageServicesPage } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Services = () => {
  return (
    <section className="container section">
      <ul className="flex-col-center lg:gap-12">
        {garageServicesPage.map(
          ({ title, text, quote, imgPath, emoji, classname }, index) => (
            <li key={index} className="flex-col-center gap-8">
              <Image
                src={imgPath}
                alt={title}
                width={640}
                height={420}
                className="rounded-lg"
              />
              <h2 className="flex gap-4 items-center">
                <span className="hidden lg:block lg:text-4xl">{emoji}</span>
                <span className="sub-title">{title}</span>
              </h2>
              <p className="description">{text}</p>
              <blockquote className="italic text-center max-w-xl text-neutral-700">
                {quote}
              </blockquote>
              <div className="border-t border-dotted border-zinc-400 max-w-4xl my-6 lg:my-10 mx-auto w-full" />
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default Services;
