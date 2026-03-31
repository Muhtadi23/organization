'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { SiCodersrank } from 'react-icons/si';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' }
  ];

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.2,
        duration: 3,
      },
    },
  }
  const textVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 17,
        duration: 1.5,
      },
    },
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">

        {/* Logo ONLY animated */}
        <Link href="/" className="flex items-center gap-2">
          <motion.span
            variants={iconVariants}
            initial="hidden"
            animate="visible"
          >
            <SiCodersrank className="w-10 h-10 text-purple" />
          </motion.span>

          <motion.span
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-xl font-bold tracking-tight text-black"
          >
            Organ
          </motion.span>
        </Link>

        {/* Desktop Nav (unchanged) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-md font-semibold text-black60 hover:text-black transition-colors ${pathname === link.href ? 'text-purple' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle (unchanged) */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium bg-black text-white hover:bg-black90 transition-colors text-sm shadow-sm"
          >
            Contact Us
          </Link>

          <button
            className="md:hidden text-black p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav (unchanged) */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-white80 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-black py-2 hover:text-purple transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="border-t border-white80 pt-4 mt-2">
            <Link
              href="/contact"
              className="block text-center w-full px-5 py-3 rounded-lg font-medium bg-purple text-white hover:bg-purple/90 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
