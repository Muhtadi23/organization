import SectionTitle from '@/app/components/SharedComp/SectionTitle';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const products = [
    {
        id: 1,
        title: 'Product One',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et vitae sint debitis omnis...',
        image: '/product1.png',
        features: [
            'Premium quality materials',
            'Eco-friendly production',
            '2-year warranty included',
        ]
    },
    {
        id: 2,
        title: 'Product Two',
        description: 'Another great product that ensures customer satisfaction and provides real value...',
        image: '/product2.png',
        features: [
            'Durable and long-lasting',
            'User-friendly design',
            'Affordable pricing',
        ]
    },
    {
        id: 3,
        title: 'Product Three',
        description: 'Another great product that ensures customer satisfaction and provides real value...',
        image: '/product3.png',
        features: [
            'Durable and long-lasting',
            'User-friendly design',
            'Affordable pricing',
        ]
    },
];

const page = () => {
    return (
        <div>
            <SectionTitle subHeading="Featured Projects" heading="Choose What Works Best For You" />
            <p className='text-black90 text-center w-[70%] mx-auto my-4'>
                We provide outsource software development services tailored to your specific needs.
                With a sharp focus on quality-driven results, we have proven to be a trusted outsourcing partner
                for companies all over the world. SIEMENS Mobility made us their long-term strategic partner
                for our reliability and quality of deliveries.
            </p>

            {products.map((product) => (
                <div key={product.id} className='flex flex-col md:flex-row gap-8 p-6 max-w-6xl mx-auto'>
                    <div className='md:w-3/5'>
                        <Image
                            src={product.image}
                            width={1000}
                            height={600}
                            alt={product.title}
                            className='w-full h-auto object-cover'
                        />
                    </div>
                    <div className='md:w-2/5 flex flex-col gap-4'>
                        <h1 className='text-2xl font-bold text-black'>{product.title}</h1>
                        <p className='text-black90 leading-relaxed'>{product.description}</p>
                        <ul className='text-black90 space-y-2'>
                            {product.features.map((feature, index) => (
                                <li key={index} className='flex items-start'>
                                    <span className='text-green-500 mr-2'>✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="text-skyBlue flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 hover:bg-white hover:text-black transition duration-500 group">
                            Get Started
                            <ExternalLink className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default page;
