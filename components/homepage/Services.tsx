'use client';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
  fadeInView,
} from '@/constants/motionVariants';
import { servicesHomepage } from '@/constants';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Services = () => {
  return (
    <section className="container section flex-col-center gap-8 mt-10">
      <div className="flex-col-center gap-8">
        <motion.h2 className="sub-title" {...fadeInView}>
          Nos services automobiles à Bergerac
        </motion.h2>
        <motion.p className="description" {...fadeInView}>
          Situé au cœur de Bergerac, l’Atelier de Jimmy vous accueille dans un
          espace moderne et convivla, équipé d’outils de diagnostic de dernière
          génération pour des interventions rapides et précises.
        </motion.p>
      </div>
      {/* grid */}
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {servicesHomepage.map(({ title, text, imgPath }, index) => (
          <motion.li
            key={index}
            className="border border-neutral-200 p-6 rounded-xl flex flex-col justify-between gap-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Image
              src={imgPath}
              alt={title}
              className="rounded-lg"
              width={300}
              height={120}
            />
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-neutral-800">{text}</p>
          </motion.li>
        ))}
      </motion.ul>

      {/* btn */}

      <Link href="/#contact">
        <motion.button
          className="inline-flex items-center gap-2 border border-white/25 bg-primary text-neutral-50 px-6 h-12 rounded-lg cursor-pointer"
          {...fadeInView}
        >
          <span>📱</span>
          <span className="font-semibold">Devis gratuit</span>
        </motion.button>
      </Link>
    </section>
  );
};

export default Services;
