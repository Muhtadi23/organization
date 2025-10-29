"use client"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { SiCodersrank } from "react-icons/si"
import { motion } from "framer-motion"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const navLinks = [
        // { href: "/about", label: "About" },
        { href: "/products", label: "Services" },
        { href: "/projects", label: "Portfolio" },
        { href: "/company", label: "Company" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ]

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
        <div className="w-full sticky top-0 z-50 backdrop-blur-sm">
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-between items-center px-8 py-5 max-w-[1440px] mx-auto">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold">
                        <span className="flex items-center gap-2 text-purple">
                            <motion.span className="text-3xl" initial="hidden" animate="visible" variants={iconVariants}>
                                <SiCodersrank />
                            </motion.span>
                            <motion.span className="tracking-tight" initial="hidden" animate="visible" variants={textVariants}>
                                Name
                            </motion.span>
                        </span>
                    </Link>
                </div>
                <div>
                    <ul className="flex space-x-10">
                        {navLinks.map(({ href, label }) => (
                            <li key={href} className="relative group">
                                <Link
                                    href={href}
                                    className={`block py-2 font-semibold tracking-wide transition-colors duration-500 ${pathname === href ? "text-purple" : "text-skyBlue hover:text-purple"
                                        }`}
                                >
                                    {label}
                                    <span
                                        className={`absolute left-0 bottom-0 h-0.5 bg-skyBlue transition-all duration-500 ease-in-out ${pathname === href ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    ></span>
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
                            <motion.span className="text-2xl" initial="hidden" animate="visible" variants={iconVariants}>
                                <SiCodersrank />
                            </motion.span>
                            <motion.span className="tracking-tight" initial="hidden" animate="visible" variants={textVariants}>
                                Name
                            </motion.span>
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
                                        className={`block px-5 py-3 font-medium transition-all duration-200 ${pathname === href ? "text-white bg-white10" : "text-white60 hover:bg-white10"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {label}
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
