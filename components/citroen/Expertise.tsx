import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Expertise = () => {
  return (
    <section className="container section flex flex-col items-center justify-center xl:flex-row gap-8">
      <div className="w-full flex items-center xl:w-1/2">
        <Image
          src="/citroen/garage_citroen_bergerac_3.jpg"
          alt="garage citroen bergerac 3"
          width={480}
          height={400}
          className="rounded-lg w-[300px] sm:w-[350px] lg:w-[400px] xl:w-[500px] xl:mt-0 mx-auto"
        />
      </div>
      <div className="w-full xl:w-1/2 flex-col-center gap-8">
        <h2 className="sub-title">
          L’expertise Citroën d’un garage indépendant à Bergerac
        </h2>
        <p className="description">
          Loin des chaînes standardisées, l’Atelier de Jimmy est un garage à
          taille humaine, où chaque client bénéficie d’un suivi personnalisé.
          Jimmy prend le temps d’écouter, de diagnostiquer et d’expliquer en
          toute clarté les travaux à réaliser. Son approche repose sur la
          transparence, la pédagogie et la confiance mutuelle.
        </p>
        <blockquote className="description italic">
          💬 “Je recommande l'atelier de Jimmy à 1000%. Très professionnel,
          courtois et arrangeant. Il s'est occupé de ma voiture suite à une
          panne, il a été très réactif, et disponible, m'a bien informée et
          tenue au courant notamment des prochains entretiens à prévoir. Rapport
          qualité++ et tarifs imbattables, je ne savais pas vers quel garage me
          tourner, je sais dorénavant ou aller en toute confiance, merci encore
          !” — Ophélie F., Bergerac
        </blockquote>
        <p className="description">
          Ce lien de proximité, souvent mentionné dans les avis clients, fait la
          différence. À Bergerac, beaucoup d’automobilistes ont choisi de
          confier leur Citroën à Jimmy non seulement pour la qualité du travail,
          mais aussi pour son honnêteté et son sens du service.
        </p>
        <Link href="/#contact">
          <button className="inline-flex items-center gap-2 border border-white/25 bg-primary text-neutral-50 px-6 h-12 rounded-lg cursor-pointer">
            <span>📱</span>
            <span className="font-semibold">Devis gratuit</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Expertise;
