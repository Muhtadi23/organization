import Link from 'next/link';
import React from 'react';
import SectionTitle from '../SharedComp/SectionTitle';
import Button from '../SharedComp/Button';

const products = [
    {
        title: "Restaurant Management",
        image: "/product3.png",
        href: "https://famslaw.co.uk/"
    },
    {
        title: "Car Service Management",
        image: "/product2.png",
        href: "http://autoweltgv.de/"
    },
    {
        title: "Restaurant Management",
        image: "/product1.png",
        href: "https://antet.de/"
    },
];

const Products = () => {
    return (
        <section className="py-16 max-w-[1440px] mx-auto">
            {/* Section Title */}
            <SectionTitle heading="Our Products" subHeading="Recent works" />

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mx-auto py-10">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                    >
                        {/* Product Image */}
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Bottom Overlay (always visible) */}
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

                        {/* Hover Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10">
                            <h3 className="text-white text-lg font-semibold mb-1">{product.title}</h3>
                            <Link href={product.href} target="_blank" rel="noopener noreferrer">
                                <span className="text-white text-sm font-medium inline-block transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                                    View Project →
                                </span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* More Button */}
            <div className="flex justify-center">
                <Link href="/products">
                    <Button title="More" />
                </Link>
            </div>
        </section>
    );
};

export default Products;