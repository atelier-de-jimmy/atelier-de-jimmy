import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen container section flex flex-col xl:flex-row items-center justify-center gap-8">
      <Image
        src="/volkswagen/garage_volkswagen_bergerac_1.jpg"
        alt="garage volkswagen bergerac 1"
        width={480}
        height={400}
        className="rounded-lg w-[300px] sm:w-[350px] lg:w-[400px] xl:w-[475x] mt-20 xl:mt-0 mx-auto"
      />
      <div className="flex-col-center gap-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 bg-opacity-50 lg:max-w-[500px]">
          Votre Garage Volkswagen à Bergerac
        </h1>
        <p className="description">
          Trouver un garage Volkswagen à Bergerac où l’on se sent en confiance
          n’est pas toujours évident. Chez L’Atelier de Jimmy, la priorité est
          simple : offrir aux conducteurs de Volkswagen un service mécanique
          fiable, transparent et durable. Jimmy Feltmann, garagiste indépendant
          à Bergerac depuis plus de 35 ans, met son expérience en mécanique et
          électromécanique au service des propriétaires de Golf, Polo, Tiguan,
          Passat ou Transporter.
        </p>
        <p className="description">
          Ici, pas de promesse commerciale, mais un travail de précision et une
          relation de proximité avec chaque client. L’Atelier de Jimmy n’est pas
          affilié au réseau Volkswagen, mais il dispose de tout l’équipement et
          du savoir-faire pour entretenir ou réparer tous les modèles
          Volkswagen, dans le respect des recommandations constructeur.
        </p>
        <Link href="/#contact">
          <button className="inline-flex items-center gap-2 border border-white/25 bg-primary text-neutral-50 px-6 h-12 rounded-lg cursor-pointer">
            <span>📱</span>
            <span className="font-semibold">Devis gratuit</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
