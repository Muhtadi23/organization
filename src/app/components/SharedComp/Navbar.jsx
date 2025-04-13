"use client"

import { useState } from "react"
import Link from "next/link"
import { SiCodersrank } from "react-icons/si"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/company", label: "Company" },
        { href: "/products", label: "Products" },
        { href: "/blog", label: "Blog" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ]

    return (
        <div className="w-full sticky top-0 z-50 backdrop-blur-sm">
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold transition-transform hover:scale-105">
                        <span className="flex items-center gap-2 text-purple">
                            <span className="text-3xl">
                                <SiCodersrank />
                            </span>
                            <span className="tracking-tight">Name</span>
                        </span>
                    </Link>
                </div>
                <div>
                    <ul className="flex space-x-10">
                        {navLinks.map(({ href, label }) => (
                            <li key={href} className="relative group">
                                <Link
                                    href={href}
                                    className="block py-2 font-semibold tracking-wide text-skyBlue transition-colors duration-500 hover:text-purple"
                                >
                                    {label}
                                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-skyBlue transition-all duration-500 ease-in-out group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
                <div className="flex justify-between items-center px-5 py-4">
                    <button
                        onClick={toggleMenu}
                        className="focus:outline-none p-1 rounded-md text-purple transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                    <Link href="/" className="text-2xl font-bold">
                        <span className="flex items-center gap-2 text-purple">
                            <span className="text-2xl">
                                <SiCodersrank />
                            </span>
                            <span className="tracking-tight">Name</span>
                        </span>
                    </Link>
                    <div className="w-6"></div> {/* Empty div for balanced spacing */}
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <nav className="border-t shadow-inner bg-black90">
                        <ul className="py-2">
                            {navLinks.map(({ href, label }) => (
                                <li key={href} className="relative">
                                    <Link
                                        href={href}
                                        className="block px-5 py-3 text-white60 hover:bg-white transition-all duration-200 font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {label}
                                        <span className="absolute left-0 top-0 bottom-0 w-1 h-full bg-black opacity-0 transition-opacity duration-200 hover:opacity-100"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </div>
    )
}

