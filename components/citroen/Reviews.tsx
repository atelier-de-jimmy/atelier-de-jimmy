import React from 'react';
import { GridPattern } from '../ui/grid-pattern';
import { cn } from '@/lib/utils';

const Reviews = () => {
  return (
    <section className="relative container section flex-col-center gap-8">
      <h2 className="sub-title">
        Ce que disent les clients Citroën de Bergerac
      </h2>
      <div className="flex-col-center gap-6">
        <p className="description">
          La meilleure preuve de satisfaction vient des conducteurs eux-mêmes.
          Parmi les nombreux avis positifs, plusieurs propriétaires de Citroën
          témoignent :
        </p>
        <blockquote className="description italic">
          <p>
            “Jimmy est très sérieux et professionnel, donne de bons conseils. Il
            m'a fait une révision et un entretien sur ma C3 Aircross. Prestation
            de très bonne qualité à un prix très raisonnable qui m'a été
            recommandé par des amis. Je recommande à mon tour vivement ce
            professionnel.”
          </p>
          <footer className="mt-2">— Jean Marie Haensel, Bergerac</footer>
        </blockquote>
        <blockquote className="description italic">
          <p>
            “Je voulais laisser un excellent commentaire à ce super garagiste
            Jimmy. Il est à l'écoute du client, compréhensif et surtout d'une
            honnêteté sans égale. J'ai écumé quelques garages et rien à voir
            avec Jimmy. Il n'est pas cher et arrangeant. Je viens de faire faire
            des étriers pour ma Citroën C4, nickel je le recommande à 200%+++ À
            très bientôt pour ma Citroën C4.”
          </p>
          <footer className="mt-2">— Romain Millac, Bergerac</footer>
        </blockquote>
      </div>
      <a
        href="https://www.google.com/search?client=firefox-b-d&sa=X&sca_esv=53a9b0789629cd9b&tbm=lcl&q=Atelier+de+Jimmy+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDYzNLQ0szQyNjezsDA1NDS1NN7AyPiKUdSxJDUnM7VIISVVwSszN7dSwbEss3gRK3ZxAAIE_mBLAAAA&rldimm=13611969237688511593&hl=fr-FR&ved=2ahUKEwibwbiwtqOQAxVTTKQEHf-ZHCsQ9fQKegQIRxAF&biw=1920&bih=955&dpr=1#lkt=LocalPoiReviews"
        target="_blank"
      >
        <button className="inline-flex items-center gap-2 border border-white/15 bg-primary text-neutral-50 px-6 h-12 rounded-xl cursor-pointer">
          <span className="font-semibold">👉 Voir les autres avis</span>
        </button>
      </a>
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

export default Reviews;
