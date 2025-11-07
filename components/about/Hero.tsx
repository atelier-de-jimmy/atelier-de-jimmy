import Image from 'next/image';
import Link from 'next/link';
import { GridPattern } from '../ui/grid-pattern';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative container section min-h-screen flex flex-col gap-12 lg:gap-6 lg:flex-row items-center justify-center">
      {/* img */}
      <div className="w-full lg:w-1/2 mt-20 lg:mt-0 z-20">
        <Image
          src="/about/hero_1.jpg"
          alt="jimmy feltmann"
          width={500}
          height={500}
          className="mx-auto rounded-lg"
        />
      </div>

      {/* text */}
      <div className="flex-col-center gap-8 w-full lg:w-1/2 z-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 bg-opacity-50 lg:max-w-[500px]">
          À propos de <br /> l’Atelier de Jimmy
        </h1>
        <h2 className="sub-title-section">
          L’histoire d’une passion devenue métier
        </h2>
        <p className="description">
          Depuis son plus jeune âge, Jimmy Feltmann nourrit une véritable
          passion pour la mécanique. Fasciné par le fonctionnement des moteurs
          et animé par le désir de comprendre et réparer, il s’est formé avec
          rigueur avant de devenir garagiste professionnel. Diplômé en
          électromécanique et fort de plus de 35 ans d’expérience, Jimmy a fondé
          l’Atelier de Jimmy à Bergerac avec une idée simple : offrir aux
          automobilistes un service honnête, humain et de qualité, où la
          confiance et la transparence passent avant tout.
        </p>
        <Link href="/#contact">
          <button className="inline-flex items-center gap-2 border border-white/25 bg-primary text-neutral-50 px-6 h-12 rounded-lg cursor-pointer">
            <span>📱</span>
            <span className="font-semibold">Prendre contact</span>
          </button>
        </Link>
      </div>
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

export default Hero;
