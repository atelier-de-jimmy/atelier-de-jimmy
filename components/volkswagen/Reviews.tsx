import React from 'react';
import { GridPattern } from '../ui/grid-pattern';
import { cn } from '@/lib/utils';

const Reviews = () => {
  return (
    <section className="relative container section flex-col-center gap-8">
      <h2 className="sub-title">Les avis des clients Volkswagen de Bergerac</h2>
      <div className="flex-col-center gap-6">
        <p className="description">
          Des retours authentiques témoignent d'un point commun : la confiance.
          C'est cette relation directe et honnête qui distingue l'Atelier de
          Jimmy des garages plus impersonnels.
        </p>
        <blockquote className="description italic">
          <p>
            “Service parfait sur ma Passat. Il explique tout, travaille
            proprement et respecte les délais. Rien à redire.”
          </p>
          <footer className="mt-2">— Isabelle F., Bergerac</footer>
        </blockquote>
        <blockquote className="description italic">
          <p>
            “Rapport qualité++ et tarifs imbattables, je ne savais pas vers quel
            garage me tourner, je sais dorénavant où aller en toute confiance,
            merci encore.”
          </p>
          <footer className="mt-2">— Ophelie Fournier, Bergerac</footer>
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
