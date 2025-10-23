'use client';
import { whyUsHomepage } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { containerVariants, itemVariants } from '@/constants/motionVariants';
import { motion } from 'framer-motion';
const WhyUs = () => {
  return (
    <section className="lg:max-w-7xl mx-auto px-[20px] section flex-col-center gap-8 bg-zinc-200/50 rounded-xl">
      <motion.h2
        className="sub-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.15 }}
      >
        Pourquoi choisir <br /> L’Atelier de Jimmy
      </motion.h2>
      {/* icons */}
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {whyUsHomepage.map(({ title, text, icon }, index) => (
          <motion.li
            key={index}
            className="flex-col-center gap-6 border border-primary/50 rounded-xl p-6"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
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
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default WhyUs;
