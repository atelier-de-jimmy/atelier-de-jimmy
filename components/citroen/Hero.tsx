import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen container section flex flex-col xl:flex-row items-center justify-center gap-8">
      <Image
        src="/citroen/garage_citroen_bergerac_1.jpg"
        alt="garage citroen bergerac 1"
        width={480}
        height={400}
        className="rounded-lg w-[300px] sm:w-[350px] lg:w-[400px] xl:w-[475x] mt-20 xl:mt-0 mx-auto"
      />
      <div className="flex-col-center gap-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 bg-opacity-50 lg:max-w-[500px]">
          Votre garage Citroën <br className="" /> à Bergerac
        </h1>
        <p className="description">
          Vous recherchez un garage Citroën à Bergerac pour entretenir ou
          réparer votre véhicule ? L’Atelier de Jimmy est un garage automobile
          indépendant qui intervient sur tous les modèles Citroën, anciens ou
          récents, avec la même rigueur et le même professionnalisme qu’un
          garage agréé. Basé au cœur de Bergerac, Jimmy Feltmann met plus de 35
          ans d’expérience en électromécanique au service des automobilistes
          Citroën de la région.
        </p>
        <div className="border-t border-dotted border-zinc-400 max-w-4xl mx-auto w-full" />

        <p className="description">
          Bien que non affilié au réseau Citroën, l’Atelier de Jimmy dispose de
          l’équipement de diagnostic moderne et du savoir-faire technique
          nécessaire pour assurer un entretien complet et des réparations de
          qualité, dans le respect des préconisations constructeur. C’est ce qui
          fait de lui aujourd’hui une référence locale à Bergerac pour les
          conducteurs de Citroën C3, C4, C5, Berlingo ou encore Jumper.
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
