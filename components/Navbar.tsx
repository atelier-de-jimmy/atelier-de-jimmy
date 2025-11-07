'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import MenuSvg from './ui/MenuSvg';
import { links } from '@/constants/index';
import Image from 'next/image';

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleLinkClick = () => {
    enablePageScroll();
    setOpenNavigation(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenNavigation(false);
        enablePageScroll();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full">
      <nav
        ref={navRef}
        aria-label="Navigation principale"
        className="relative flex flex-col justify-between items-center w-full max-w-lg m-4 p-2 rounded-xl
        bg-white/50 backdrop-blur-lg shadow-xl border border-primary/25"
      >
        {/* Logo + bouton menu toujours visible */}
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="hidden xxs:block">
            <Image
              src="/logo.png"
              alt="logo de l'atelier de jimmy"
              width={60}
              height={40}
              className="rounded-lg"
            />
          </Link>
          <a href="tel:0670942802" className="font-bold cursor-pointer">
            📞 06 70 94 28 02
          </a>

          <button
            className="p-2 rounded-lg border-2 border-primary cursor-pointer"
            onClick={toggleNavigation}
            aria-label="Menu principal"
            aria-expanded={openNavigation}
            aria-controls="main-menu"
          >
            <MenuSvg openNavigation={openNavigation} />
          </button>
        </div>

        {/* Menu mobile (même sur desktop) */}
        <div
          id="main-menu"
          className={`${
            openNavigation
              ? 'flex bg-[#f5f5f5]/75 border border-primary/25 backdrop-blur-xl mt-4'
              : 'hidden'
          } flex-col w-full rounded-xl gap-6 p-4 transition-all duration-300`}
        >
          {links.map(({ link, href }, i) => (
            <Link
              key={i}
              href={href}
              onClick={handleLinkClick}
              className="text-neutral-800 text-[18px] text-center hover:text-primary transition-all duration-300 hover:font-bold"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
