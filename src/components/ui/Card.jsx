import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const ServiceCard = ({ title, description, icon: Icon, href }) => {
  return (
    <div className="group bg-white p-8 rounded-2xl border border-white80 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="w-14 h-14 bg-white80 rounded-xl flex items-center justify-center text-purple mb-6 group-hover:scale-110 group-hover:bg-purple group-hover:text-white transition-all duration-300">
        {Icon && <Icon size={28} />}
      </div>
      <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
      <p className="text-black60 mb-6 leading-relaxed">{description}</p>
      {href && (
        <Link href={href} className="inline-flex items-center text-skyBlue font-medium hover:text-purple transition-colors">
          Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
};

export const ProjectCard = ({ title, category, image, href }) => {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white border border-white80 shadow-sm hover:shadow-xl transition-all duration-300">

      <div className="relative h-64 w-full overflow-hidden bg-white80">

        {/* ✅ Real Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
      </div>

      <div className="p-6">
        <span className="text-sm font-semibold text-purple mb-2 block tracking-wider uppercase">
          {category}
        </span>

        <h3 className="text-xl font-bold text-black mb-4 group-hover:text-skyBlue transition-colors">
          {title}
        </h3>

        {href && (
          <Link
            href={href}
            className="inline-flex items-center text-black font-medium hover:text-purple transition-colors"
          >
            View Project
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
};

export const BlogCard = ({ title, excerpt, date, category, href }) => {
  return (
    <div className="group bg-white rounded-2xl border border-white80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="p-8 flex-grow">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-white80 text-purple text-xs font-semibold rounded-full">{category}</span>
          <span className="text-sm text-black60">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-black mb-3 group-hover:text-skyBlue transition-colors">{title}</h3>
        <p className="text-black60 leading-relaxed mb-6">{excerpt}</p>
      </div>
      <div className="px-8 pb-8 mt-auto">
        <Link href={href} className="inline-flex items-center text-skyBlue font-medium hover:text-purple transition-colors">
          Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
