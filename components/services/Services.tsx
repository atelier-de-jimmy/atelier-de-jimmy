'use client';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
  fadeInView,
} from '@/constants/motionVariants';
import { garageServicesPage } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Services = () => {
  return (
    <section className="container section">
      <motion.ul
        className="flex-col-center lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {garageServicesPage.map(
          ({ title, text, quote, imgPath, emoji, classname }, index) => (
            <motion.li
              key={index}
              className="flex-col-center gap-8"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src={imgPath}
                alt={title}
                width={640}
                height={420}
                className="rounded-lg"
              />
              <motion.h2
                className="flex gap-4 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.15 }}
              >
                <span className="hidden lg:block lg:text-4xl">{emoji}</span>
                <span className="sub-title">{title}</span>
              </motion.h2>
              <motion.p
                className="description"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                viewport={{ once: true, amount: 0.15 }}
              >
                {text}
              </motion.p>
              <motion.blockquote
                className="italic text-center max-w-xl text-neutral-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, amount: 0.15 }}
              >
                {quote}
              </motion.blockquote>
              <div className="border-t border-dotted border-zinc-400 max-w-4xl my-6 lg:my-10 mx-auto w-full" />
            </motion.li>
          )
        )}
      </motion.ul>
    </section>
  );
};

export default Services;
