import SectionTitle from '@/app/components/SharedComp/SectionTitle';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <SectionTitle subHeading="Our Products" heading="Choose What Works Best For You" />
            <p className='text-white60 text-center w-[70%] mx-auto my-4'>We provide outsource software development services tailored to your specific needs.
                With a sharp focus on quality-driven results, we have proven to be a trusted outsourcing partner for companies all over the world. SIEMENS Mobility made us their long-term strategic partner for our reliability and quality of deliveries.</p>
            <div className='flex flex-col md:flex-row gap-8 p-6 max-w-6xl mx-auto'>
                <div className='md:w-3/5'>
                    <Image
                        src='/product1.jpg'
                        width={1000}
                        height={600}
                        alt='product'
                        className='w-full h-auto object-cover'
                    />
                </div>
                <div className='md:w-2/5 flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold text-white'>Product Title</h1>
                    <p className='text-white60 leading-relaxed'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et vitae sint debitis omnis,
                        earum ipsam veritatis asperiores id labore tenetur culpa nam nisi dicta beatae facere quas iste numquam.
                    </p>
                    <ul className='text-white60 space-y-2'>
                        <li className='flex items-start'>
                            <span className='text-green-500 mr-2'>✓</span>
                            Premium quality materials
                        </li>
                        <li className='flex items-start'>
                            <span className='text-green-500 mr-2'>✓</span>
                            Eco-friendly production
                        </li>
                        <li className='flex items-start'>
                            <span className='text-green-500 mr-2'>✓</span>
                            2-year warranty included
                        </li>
                    </ul>
                    <button className="text-white60 flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 hover:bg-white hover:text-black transition duration-500 group">
                        Get Started
                        <ExternalLink className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </div>

    );
};

export default page;