import Link from 'next/link';
import React from 'react';
import SectionTitle from '../SharedComp/SectionTitle';

const products = [
    {
        title: "Gym Management System",
        image: "/product3.jpg",
    },
    {
        title: "Transportation Tracker",
        image: "/product4.jpg",
    },
    {
        title: "Parcel Delivery App",
        image: "/product2.jpg",
    },
    {
        title: "School Management System",
        image: "/product1.jpg",
    },
    {
        title: "Inventory Management System",
        image: "/product4.jpg",
    },
    {
        title: "Logistics Management System",
        image: "/product3.jpg",
    },
];

const Products = () => {
    return (
        <section className="py-16 bg-gray-50">
            {/* Section Title */}
            <SectionTitle heading="Our Products" />

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mx-auto py-10">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="relative w-full h-60">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-white p-5 text-center rounded-b-2xl">
                            <h3 className="text-lg font-semibold ">{product.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* More Button */}
            <div className="flex justify-center">
                <Link href="/products" passHref>
                    <button type="button" className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-600 transition shadow-md">
                        More
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Products;
