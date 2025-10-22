import Link from 'next/link';
import React from 'react';
import { CiMail } from 'react-icons/ci';
import { MdOutlineSmartphone } from 'react-icons/md';

const Contact = () => {
  return (
    <section className="section container flex-col-center gap-8">
      <h2 className="sub-title">Parlons de votre Volkswagen</h2>
      <p className="description">
        Situé au cœur de Bergerac, Jimmy Feltmann et son atelier entretiennent
        une relation privilégiée avec chaque client et chaque Volkswagen. Ici,
        on prend le temps – le temps d’écouter, de comprendre et de conseiller.
        Que vous conduisiez une Golf, une Polo, un Tiguan ou un Transporter,
        Jimmy s’investit personnellement pour que votre véhicule roule en toute
        sérénité, dans le respect d’une mécanique durable et soignée.
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
