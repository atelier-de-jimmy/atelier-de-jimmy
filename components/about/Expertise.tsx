'use client';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
  fadeInView,
} from '@/constants/motionVariants';
import Image from 'next/image';
import Link from 'next/link';

const Expertise = () => {
  return (
    <section className="section container flex-col-center gap-8">
      <motion.div className="" {...fadeInView}>
        <Image
          src="/about/security.jpg"
          alt="sécurité voiture jimmy feltmann"
          width={500}
          height={300}
          className="rounded-lg mx-auto"
        />
      </motion.div>
      <motion.h2 className="sub-title" {...fadeInView}>
        Une expertise au service de votre sécurité
      </motion.h2>
      <motion.p className="description" {...fadeInView}>
        Grâce à son expérience en électromécanique et à son équipement de
        dernière génération, Jimmy intervient sur toutes les marques de
        véhicules, des plus anciennes aux plus récentes. Son objectif : assurer
        la performance, la fiabilité et la longévité de votre voiture, tout en
        garantissant votre sécurité sur la route.
      </motion.p>
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

export default Expertise;
