import Image from 'next/image';
import Link from 'next/link';

const Expertise = () => {
  return (
    <section className="section container flex-col-center gap-8">
      <Image
        src="/about/security.jpg"
        alt="sécurité voiture jimmy feltmann"
        width={500}
        height={300}
        className="rounded-lg mx-auto"
      />
      <h2 className="sub-title">Une expertise au service de votre sécurité</h2>
      <p className="description">
        Grâce à son expérience en électromécanique et à son équipement de
        dernière génération, Jimmy intervient sur toutes les marques de
        véhicules, des plus anciennes aux plus récentes. Son objectif : assurer
        la performance, la fiabilité et la longévité de votre voiture, tout en
        garantissant votre sécurité sur la route.
      </p>
      <Link href="/#contact">
        <button className="inline-flex items-center gap-2 border border-white/25 bg-primary text-neutral-50 px-6 h-12 rounded-lg cursor-pointer">
          <span>📱</span>
          <span className="font-semibold">Devis gratuit</span>
        </button>
      </Link>
    </section>
  );
};

export default Expertise;
