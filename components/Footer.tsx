import Link from 'next/link';
import { CiMail } from 'react-icons/ci';
import { MdOutlineSmartphone } from 'react-icons/md';
import { links } from '@/constants';
import Image from 'next/image';
import { businessInfo } from '@/constants/businessInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container h-full section flex flex-col items-center justify-center gap-6">
      <Link href="/" className="text-center mx-auto">
        <Image
          src="/card.jpg"
          width={500}
          height={250}
          alt="atelier de jimmy"
          className="rounded-lg"
        />
      </Link>
      {/* links */}
      <div className="flex flex-col items-center md:flex-row gap-6">
        {links.map(({ link, href }, index) => (
          <Link
            key={index}
            href={href}
            className="hover:text-primary transition-all duration-300 hover:font-bold"
          >
            {link}
          </Link>
        ))}
      </div>
      {/* legals */}

      <div className="flex flex-col items-center gap-2 justify-around w-full">
        <p className="text-primary">
          <strong>{businessInfo.name}</strong>
        </p>
        <p>
          {businessInfo.address.street}, {businessInfo.address.postalCode}{' '}
          {businessInfo.address.city}
        </p>
        <div className="flex gap-4 items-center justify-center">
          <MdOutlineSmartphone />
          <a href="tel:0617122321">{businessInfo.phone}</a>
        </div>
        <div className="flex gap-4 items-center justify-center ">
          <CiMail />
          <a href="mailto:mustaphatouay@hotmail.com" className="">
            jimmyfeltmann24@gmail.com
          </a>
        </div>
      </div>
      <div className="flex-col-center gap-4">
        <span>Il opère sur toutes les marques comme :</span>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {' '}
          <Link
            href="/garage-citroen-bergerac"
            className="hover:font-bold hover:text-primary duration-300 transition-all"
          >
            Citroën
          </Link>
          <Link
            href="/garage-volkswagen-bergerac"
            className="hover:font-bold hover:text-primary duration-300 transition-all"
          >
            Volkswagen
          </Link>
        </div>
      </div>
      <Link
        href="/mentions-legales"
        className="text-neutral-900 hover:text-primary transition-all duration-300 hover:font-bold"
      >
        Mentions légales
      </Link>
      <p className="mx-auto text-center">
        © {currentYear} L'Atelier de Jimmy. Tous droits réservés.
      </p>
      <p>
        Crée par{' '}
        <a
          className="text-primary font-bold"
          href="https://pulsar-pixel.com/"
          target="_blank"
        >
          Pulsar Pixel
        </a>
      </p>
    </footer>
  );
};

export default Footer;
