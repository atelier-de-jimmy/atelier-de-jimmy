'use client';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
  fadeInView,
} from '@/constants/motionVariants';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { GridPattern } from '../ui/grid-pattern';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative section container min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8">
      {/* right img */}
      <div className="lg:w-1/2 mt-20 lg:mt-0 z-20">
        <motion.div
          className="lg:w-[490px] grid grid-cols-1 lg:grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.25,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {/* Image principale */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: 'easeOut' },
              },
            }}
            className="lg:col-span-2"
          >
            <Image
              src="/services/hero/services_jimmy_1.jpg"
              width={486}
              height={200}
              alt="services jimmy hero 1"
              className="rounded-lg"
            />
          </motion.div>

          {/* Image secondaire gauche */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: 'easeOut' },
              },
            }}
            className="hidden lg:block lg:col-span-1"
          >
            <Image
              src="/services/hero/services_jimmy_2.jpg"
              width={234}
              height={400}
              alt="services jimmy hero 2"
              className="rounded-lg"
            />
          </motion.div>

          {/* Image secondaire droite */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: 'easeOut' },
              },
            }}
            className="hidden lg:block lg:col-span-1"
          >
            <Image
              src="/services/hero/services_jimmy_3.jpg"
              width={234}
              height={400}
              alt="services jimmy hero 3"
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
      {/* left text */}
      <motion.div
        className="lg:w-1/2 flex-col-center gap-8 z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.25, // délai entre les enfants
              delayChildren: 0.1, // petit délai avant la première apparition
            },
          },
        }}
      >
        {/* Titre */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 bg-opacity-50 lg:max-w-[500px]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: 'easeOut' },
            },
          }}
        >
          Nos services automobiles à Bergerac
        </motion.h1>

        {/* Paragraphe principal */}
        <motion.p
          className="description"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: 'easeOut' },
            },
          }}
        >
          Depuis plus de 35 ans, Jimmy Feltmann, garagiste diplômé en
          électromécanique, met son expertise au service des conducteurs de
          Bergerac et des communes voisines. À l’Atelier de Jimmy, chaque
          intervention est réalisée avec rigueur, transparence et passion du
          métier, qu’il s’agisse d’un entretien régulier, d’un diagnostic précis
          ou d’une réparation complète. Il opère sur tout type de véhicules
          légers, aussi bien une{' '}
          <Link href="/garage-citroen-bergerac" className="font-bold">
            Citroën
          </Link>{' '}
          qu'une{' '}
          <Link href="/garage-volkswagen-bergerac" className="font-bold">
            Volkswagen
          </Link>
          .
        </motion.p>

        {/* Citation */}
        <motion.p
          className="description italic"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: 'easeOut' },
            },
          }}
        >
          “Professionnel, courtois, arrangeant et toujours à l’écoute” —
          témoignent les clients réguliers de l’atelier.
        </motion.p>

        {/* Bouton */}
        <Link href="/#contact">
          <motion.button
            className="inline-flex items-center gap-2 border border-white/25 bg-primary text-neutral-50 px-6 h-12 rounded-lg cursor-pointer"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, ease: 'easeOut' },
              },
            }}
          >
            <span>📱</span>
            <span className="font-semibold">Devis gratuit</span>
          </motion.button>
        </Link>
      </motion.div>

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

export default Hero;
