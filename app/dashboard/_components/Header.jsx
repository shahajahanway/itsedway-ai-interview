"use client";
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Header() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log(path);
  }, [path]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="p-4 shadow-sm" style={{ backgroundColor: '#D4EBF8' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Image src={'/logo.svg'} width={120} height={50} alt="logo" />

        {/* Burger Menu (Mobile/Tablet Only) */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#233dff"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6">
          {[
            { href: '/dashboard', label: 'Dashboard' },
            { href: '/dashboard/questions', label: 'Questions' },
            { href: '/dashboard/upgrade', label: 'Upgrade' },
            { href: '/dashboard/how-it-works', label: 'How it Works?' },
          ].map((link) => (
            <Link href={link.href} key={link.label}>
              <li
                className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                  path === link.href ? 'text-[#5356ff] font-bold' : 'text-black'
                }`}
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>

        {/* User Button */}
        <UserButton />
      </div>

      {/* Mobile/Tablet Navigation */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-10"
            onClick={closeMenu}
          ></div>

          {/* Sidebar Menu */}
          <div
            className={`md:hidden fixed top-0 right-0 h-screen p-6 transform transition-transform duration-300 z-20 ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`} 
            style={{ backgroundColor: '#D4EBF8' }} // Changed color here
          >
            <ul className="flex flex-col space-y-4 text-black">
              {[
                { href: '/dashboard', label: 'Dashboard' },
                { href: '/dashboard/questions', label: 'Questions' },
                { href: '/dashboard/upgrade', label: 'Upgrade' },
                { href: '/dashboard/how-it-works', label: 'How it Works?' },
              ].map((link) => (
                <Link href={link.href} key={link.label}>
                  <li
                    className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                      path === link.href
                        ? 'text-[#5356ff] font-bold'
                        : 'text-black'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="mt-auto flex justify-end">
              <UserButton />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;