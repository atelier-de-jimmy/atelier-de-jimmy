import Link from 'next/link';
import React from 'react';
import { CiMail } from 'react-icons/ci';
import { MdOutlineSmartphone } from 'react-icons/md';

const Contact = () => {
  return (
    <section className="section container flex-col-center gap-8">
      <h2 className="sub-title">Contact et devis Citroën à Bergerac</h2>
      <p className="description">
        Besoin d’un entretien Citroën, d’une réparation mécanique, ou d’un
        diagnostic électronique ? Contactez dès aujourd’hui L’Atelier de Jimmy,
        votre garage Citroën indépendant à Bergerac, pour obtenir un devis
        gratuit et sans engagement.
      </p>
      <div className="flex flex-col gap-2 justify-around w-full">
        <div className="flex gap-4 items-center justify-center ">
          <CiMail />
          <a href="mailto:mustaphatouay@hotmail.com" className="">
            jimmyfeltmann24@gmail.com
          </a>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <MdOutlineSmartphone />
          <a href="tel:0617122321">06 70 94 28 02</a>
        </div>
      </div>
      <Link href="/#contact">
        <button className="inline-flex items-center gap-2 border border-white/25 bg-primary text-neutral-50 px-6 h-12 rounded-lg cursor-pointer">
          <span>👉</span>
          <span className="font-semibold">Formulaire</span>
        </button>
      </Link>
    </section>
  );
};

export default Contact;
