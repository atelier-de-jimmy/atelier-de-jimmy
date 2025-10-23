'use client';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
  fadeInView,
} from '@/constants/motionVariants';
import Image from 'next/image';
import React from 'react';

const Presentation = () => {
  return (
    <section className="container section flex-col-center gap-18">
      {/* first section */}
      <motion.div
        className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-8"
        {...fadeInView}
      >
        <div className="w-full lg:w-1/2">
          <Image
            src="/about/expertise.jpg"
            alt="expertise de jimmy feltmann"
            width={500}
            height={500}
            className="rounded-lg mx-auto"
          />
        </div>

        <div className="w-full lg:w-1/2 flex-col-center gap-6">
          <motion.h2 className="sub-title" {...fadeInView}>
            Un savoir-faire <br /> artisanal et moderne
          </motion.h2>
          <motion.p className="description" {...fadeInView}>
            À l’Atelier de Jimmy, chaque véhicule est pris en charge avec soin
            et exigence. Jimmy met un point d’honneur à combiner le savoir-faire
            artisanal d’un garagiste indépendant et la précision technologique
            des outils de diagnostic modernes. Ses interventions couvrent tous
            les domaines de l’automobile : entretien, réparation mécanique,
            électronique, diagnostic, et pré-contrôle technique. Chaque service
            est réalisé dans le respect des préconisations constructeur, avec
            des pièces de qualité et un suivi personnalisé.
          </motion.p>
        </div>
      </motion.div>
      {/* second section */}

      <div className="flex flex-col items-center justify-center gap-6 lg:flex-row-reverse lg:gap-8">
        <motion.div className="w-full lg:w-1/2" {...fadeInView}>
          <Image
            src="/about/proximity.jpg"
            alt="aterlier de proximité de jimmy feltmann"
            width={500}
            height={500}
            className="rounded-lg mx-auto"
          />
        </motion.div>

        <div className="w-full lg:w-1/2 flex-col-center gap-6">
          <motion.h2 className="sub-title" {...fadeInView}>
            Une approche humaine <br />
            et de proximité
          </motion.h2>
          <motion.p className="description" {...fadeInView}>
            Au-delà de la technique, Jimmy accorde une grande importance à la
            relation de confiance qu’il tisse avec ses clients. Son approche
            repose sur l’écoute, la pédagogie et la transparence : il prend
            toujours le temps d’expliquer les réparations et de conseiller sur
            l’entretien futur du véhicule. Les automobilistes apprécient ce
            contact direct et sincère, loin des pratiques impersonnelles des
            grands centres automobiles.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
