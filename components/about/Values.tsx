'use client';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
  fadeInView,
} from '@/constants/motionVariants';
import { valueAboutPage } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Values = () => {
  return (
    <section className="lg:max-w-7xl mx-auto px-[20px] section flex-col-center gap-8 bg-zinc-200/50 rounded-xl">
      <motion.h2 className="sub-title" {...fadeInView}>
        Engagement et valeurs
      </motion.h2>
      <motion.p className="description" {...fadeInView}>
        L’Atelier de Jimmy s’appuie sur des valeurs fortes qui guident chaque
        intervention. Jimmy considère que chaque voiture mérite une attention
        particulière, et que chaque client doit repartir en toute sérénité, avec
        la certitude d’avoir été compris et bien conseillé.
      </motion.p>
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {valueAboutPage.map(({ title, text, icon }, index) => (
          <motion.li
            key={index}
            className="flex-col-center gap-6 border border-primary/50 rounded-lg p-6"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Image
              src={icon}
              alt={title}
              className="p-2 bg-secondary rounded-xl flex items-center"
              width={60}
              height={60}
            />
            <h3 className="text-lg text-neutral-900 font-bold">{title}</h3>

            <p className="text-center text-neutral-800">{text}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Values;
