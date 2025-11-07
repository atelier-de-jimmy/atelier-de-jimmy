import { Marquee } from '@/components/ui/marquee';
import { cn } from '@/lib/utils';
import { clients } from '@/constants/index';
import { clientsMobile } from '@/constants/index';

const firstRow = clients.slice(0, clients.length / 2);
const secondRow = clients.slice(clients.length / 2);

const ReviewCard = ({ name, text }: { name: string; text: string }) => {
  return (
    <div
      className={cn(
        'relative w-sm cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]'
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <p className="text-sm font-medium">{name}</p>
          <span>⭐⭐⭐⭐⭐</span>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{text}</blockquote>
    </div>
  );
};

const SectionHeader = () => (
  <div className="flex flex-col items-center justify-center gap-8">
    <h2 className="sub-title">
      Ce que disent les clients <br className="hidden sm:block" /> du garage de
      Jimmy à Bergerac
    </h2>
    <p className="description">
      Les clients de l'Atelier de Jimmy apprécient autant son professionnalisme
      que son sens du contact. Leurs témoignages reflètent la confiance et la
      reconnaissance qu’inspire ce garage à Bergerac, où la mécanique reste
      avant tout une affaire humaine.
    </p>
  </div>
);

const ReviewsMobile = () => (
  <ul className="flex flex-col gap-8">
    {clientsMobile.map(({ text, name }, index) => (
      <li
        key={index}
        className="w-xs sm:w-sm cursor-pointer overflow-hidden rounded-xl p-4 flex flex-col gap-4 border border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
      >
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">{name}</p>
          <span>⭐⭐⭐⭐⭐</span>
        </div>
        <p className="mt-2 text-sm">{text}</p>
      </li>
    ))}
  </ul>
);

const ReviewsDesktop = () => (
  <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg">
    <Marquee pauseOnHover className="[--duration:60s]">
      {firstRow.map((review) => (
        <ReviewCard key={review.name} {...review} />
      ))}
    </Marquee>
    <Marquee reverse pauseOnHover className="[--duration:60s]">
      {secondRow.map((review) => (
        <ReviewCard key={review.name} {...review} />
      ))}
    </Marquee>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#f5f5f5]" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#f5f5f5]" />
  </div>
);
const Reviews = () => {
  return (
    <section className="container section">
      <div className="flex flex-col items-center justify-center gap-[40px] md:gap-[50px] lg:gap-[60px]">
        {' '}
        <SectionHeader />
        {/* Bloc spécifique selon device */}
        <div className="md:hidden">
          <ReviewsMobile />
        </div>
        <div className="hidden md:block w-full">
          <ReviewsDesktop />
        </div>
        <a
          href="https://www.google.com/search?client=firefox-b-d&sa=X&sca_esv=53a9b0789629cd9b&tbm=lcl&q=Atelier+de+Jimmy+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDYzNLQ0szQyNjezsDA1NDS1NN7AyPiKUdSxJDUnM7VIISVVwSszN7dSwbEss3gRK3ZxAAIE_mBLAAAA&rldimm=13611969237688511593&hl=fr-FR&ved=2ahUKEwibwbiwtqOQAxVTTKQEHf-ZHCsQ9fQKegQIRxAF&biw=1920&bih=955&dpr=1#lkt=LocalPoiReviews"
          target="_blank"
        >
          <button className="inline-flex items-center gap-2 border border-white/15 bg-primary text-neutral-50 px-6 h-12 rounded-xl cursor-pointer">
            <span className="font-semibold">👉 Voir les autres avis</span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Reviews;
