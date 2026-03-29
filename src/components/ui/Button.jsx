import React from 'react';
import Link from 'next/link';

const Button = ({ children, href, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-purple text-white hover:opacity-90 shadow-md hover:shadow-lg focus:ring-purple",
    secondary: "bg-skyBlue text-white hover:opacity-90 shadow-md hover:shadow-lg focus:ring-skyBlue",
    outline: "border-2 border-black90 text-black90 hover:bg-black90 hover:text-white focus:ring-black90",
    ghost: "text-black90 hover:bg-white80 hover:text-black focus:ring-white80"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
