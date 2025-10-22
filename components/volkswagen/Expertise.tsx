import { expertiseVolkswagen } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Expertise = () => {
  return (
    <section className="container section flex flex-col items-center justify-center gap-8">
      <Image
        src="/volkswagen/garage_volkswagen_bergerac_2.jpg"
        alt="garage volkswagen bergerac 3"
        width={600}
        height={400}
        className="rounded-lg mx-auto"
      />

      <div className="flex-col-center gap-6">
        <h2 className="sub-title">
          Réparations mécaniques Volkswagen{' '}
          <br className="hidden sm:block md:hidden lg:block" /> dans votre
          garage à Bergerac
        </h2>
        <p className="description">
          Une boîte de vitesses qui accroche, une perte de puissance, un moteur
          qui vibre ? Ces signes ne trompent pas. Jimmy met son expertise à
          profit pour diagnostiquer rapidement la cause d’une panne et proposer
          la solution la plus adaptée.
        </p>

        <p className="description">
          À l’Atelier de Jimmy, les réparations sont réalisées dans les règles
          de l’art, avec des pièces d’origine ou équivalentes constructeur. Les
          interventions les plus fréquentes concernent :
        </p>
        <ul className="flex flex-col">
          {expertiseVolkswagen.map(({ text }, index) => (
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
          Qu’il s’agisse d’un Volkswagen Golf au moteur TDI, d’un Tiguan
          familial, ou d’un Transporter utilitaire, Jimmy intervient avec la
          même exigence de qualité. Chaque réparation est vérifiée, testée et
          expliquée avant restitution du véhicule.
        </p>
        <blockquote className="description italic">
          💬 “ J'ai confié ma voiture à Jimmy pour une remise en état après 3
          ans sans rouler et je suis complétement satisfaite. Il est de très bon
          conseil et super arrangeant. Si vous cherchez un garagiste humain,
          compétent, à l'écoute et qui ne cherche pas à tout prix à se faire de
          l'argent sur votre dos : allez à l'atelier de Jimmy. Je recommande
          +++” — Camille ANDRIEU
        </blockquote>
      </div>
      <Link href="/#contact">
        <button className="inline-flex items-center gap-2 border border-white/25 bg-primary text-neutral-50 px-6 h-12 rounded-lg cursor-pointer">
          <span>📱</span>
          <span className="font-semibold">Devis gratuit</span>
        </button>
      </Link>
    </section>
  );
};

export default Expertise;
