import Link from 'next/link';
import React from 'react';
import { SiCodersrank } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="w-full border-t bg-background py-6">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold transition-transform hover:scale-105">
                        <span className="flex items-center gap-2">
                            <span className="text-3xl">
                                <SiCodersrank />
                            </span>
                            <span className="tracking-tight">Name</span>
                        </span>
                    </Link>
                </div>
                <p className="text-center text-sm text-muted-foreground md:text-left">
                    &copy; {new Date().getFullYear()} Name. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                        Privacy Policy
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                        Terms of Service
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                        Careers
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;