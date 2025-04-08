'use client';
import Link from 'next/link';
import React from 'react';
import { SiCodersrank } from 'react-icons/si';

const Footer = () => {
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "/projects", label: "Projects" },
        { href: "/company", label: "Company" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <footer className="bg-black w-full py-10 px-4 text-center">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
                {/* Logo and Tagline */}
                <div className="flex flex-col items-center text-white">
                    <SiCodersrank className="text-5xl mb-2" />
                    <h2 className="text-2xl font-bold">Name</h2>
                    <p className="text-white60">We Drive Digital Transformation</p>
                </div>

                {/* Navigation Links */}
                <ul className="flex flex-wrap justify-center gap-6">
                    {navLinks.map(({ href, label }) => (
                        <li key={href} className="relative group">
                            <Link
                                href={href}
                                className="text-white60 font-medium tracking-wide transition-colors hover:text-white"
                            >
                                {label}
                                <span className="block h-0.5 w-0 bg-white60 transition-all duration-300 ease-in-out group-hover:w-full mt-1"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
