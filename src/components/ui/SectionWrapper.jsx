import React from 'react';

const SectionWrapper = ({ children, className = '', id = '', bg = 'bg-white' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${bg} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
