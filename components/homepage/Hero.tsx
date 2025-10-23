'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
const Hero = () => {
  return (
    <section className="w-full min-h-screen flex-col-center bg-cover bg-center bg-[url('/homepage/garage-bg-mob.jpg')] md:bg-[url('/homepage/garage-bg.jpg')]">
      <div className="backdrop-blur-sm bg-black/70 md:outline md:outline-primary/75 md:outline-offset-4 rounded-lg flex flex-col justify-center items-center w-full sm:w-[600px] md:w-[700px] max-w-3xl gap-8 shadow-2xl p-6 md:p-12">
        <motion.h1
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 bg-opacity-50`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          L'Atelier de Jimmy -
          <br />
          Garage Automobile à Bergerac
        </motion.h1>
        <motion.p
          className="text-center text-sm text-white/90 md:text-md max-w-2xl lg:max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Bienvenue à l’Atelier de Jimmy, votre garagiste de confiance à
          Bergerac, spécialisé dans l’entretien, la réparation et le diagnostic
          de <strong>véhicules légers</strong> toutes marques. Fort de plus de{' '}
          <strong>35 ans d’expérience</strong>, Jimmy Feltmann, garagiste
          passionné et diplômé en électromécanique, met son savoir-faire au
          service de la fiabilité et de la sécurité de votre voiture.
        </motion.p>
        {/* btn */}
        <Link href="/#contact">
          <motion.button
            className="inline-flex items-center gap-2 border border-white/25 bg-primary/50 text-neutral-50 px-6 h-12 rounded-lg cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span>📱</span>
            <span className="font-semibold">Devis gratuit</span>
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
