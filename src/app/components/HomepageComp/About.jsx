import React from 'react';
import SectionTitle from '../SharedComp/SectionTitle';
import Image from 'next/image';

const About = () => {
    return (
        <div className="py-10 bg-gray-50">
            <SectionTitle heading="WHO WE ARE" />
            <div className="p-6 grid lg:grid-cols-2 sm:grid-cols-1 items-center justify-between gap-8 mx-auto">
                <div className="space-y-5">
                    <h1 className='text-4xl font-bold text-gray-800'>Name...</h1>
                    <p className='leading-relaxed'>
                        SkyIt started its journey with the determination of enabling organizations to leverage technology for betterment. Our priority is to deliver impactful solutions with superior user experience. We are highly design-focused and practice SCRUM to meet client requirements, delivering solutions on time and within budget.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center'>
                    <div className='border p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 '>
                        <Image src="/images/experience-icon.png" alt="Experience Icon" width={50} height={50} className="mx-auto" />
                        <h5 className='text-5xl font-semibold text-indigo-600 mt-2'>6+</h5>
                        <p className='text-gray-700 mt-2'>Years Experience <br /> in App Development</p>
                    </div>
                    <div className='border p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 '>
                        <Image src="/images/mobile-apps-icon.png" alt="Mobile Apps Icon" width={50} height={50} className="mx-auto" />
                        <h5 className='text-5xl font-semibold text-indigo-600 mt-2'>28</h5>
                        <p className='text-gray-700 mt-2'>Mobile Apps <br /> Developed</p>
                    </div>
                    <div className='border p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 '>
                        <Image src="/images/websites-icon.png" alt="Websites Icon" width={50} height={50} className="mx-auto" />
                        <h5 className='text-5xl font-semibold text-indigo-600 mt-2'>25</h5>
                        <p className='text-gray-700 mt-2'>Websites <br /> Developed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;