import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-20 pb-8 border-t border-black60/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="w-8 h-8 bg-skyBlue rounded-lg flex items-center justify-center text-white font-bold">O</div>
              <span className="text-xl font-bold tracking-tight">Organ</span>
            </Link>
            <p className="text-white60 text-sm leading-relaxed mb-6">
              A modern digital agency committed to building scalable web applications and stunning websites for leading brands.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-black90 rounded-full text-white80 hover:text-white hover:bg-skyBlue transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-black90 rounded-full text-white80 hover:text-white hover:bg-skyBlue transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="p-2 bg-black90 rounded-full text-white80 hover:text-white hover:bg-skyBlue transition-colors"><Github size={18} /></a>
              <a href="#" className="p-2 bg-black90 rounded-full text-white80 hover:text-white hover:bg-skyBlue transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services/web-dev" className="text-white60 hover:text-skyBlue text-sm transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile" className="text-white60 hover:text-skyBlue text-sm transition-colors">Mobile Applications</Link></li>
              <li><Link href="/services/design" className="text-white60 hover:text-skyBlue text-sm transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services/cloud" className="text-white60 hover:text-skyBlue text-sm transition-colors">Cloud Architecture</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white60 hover:text-purple text-sm transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-white60 hover:text-purple text-sm transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="text-white60 hover:text-purple text-sm transition-colors">Blog & News</Link></li>
              <li><Link href="/contact" className="text-white60 hover:text-purple text-sm transition-colors">Contact</Link></li>
              <li><Link href="/pricing" className="text-white60 hover:text-purple text-sm transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-white60 text-sm mb-4">Subscribe to our newsletter for the latest design and engineering insights.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 bg-black90 border border-black60/50 rounded-lg text-sm text-white focus:outline-none focus:border-purple"
              />
              <button className="w-full px-4 py-3 bg-purple hover:bg-purple/90 text-white font-medium rounded-lg text-sm transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black60/30 text-white60 text-sm">
          <p>&copy; {currentYear} Organ Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
