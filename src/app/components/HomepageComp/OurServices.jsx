import React from 'react';
import { FaCode, FaGlobe, FaShoppingCart, FaChartBar } from "react-icons/fa";
import SectionTitle from '../SharedComp/SectionTitle';

// Services data array
const services = [
    {
        icon: <FaCode />,
        title: "Custom Software",
        description: "We are devoted to helping you with custom digital software experiences. We use the most advanced approaches to design your dream solution."
    },
    {
        icon: <FaGlobe />,
        title: "Web App Development",
        description: "Comprehensive web application development services tailored to your business needs, from responsive design to complex backend systems."
    },
    {
        icon: <FaShoppingCart />,
        title: "E-commerce Solution",
        description: "We provide full-fledged e-commerce solutions to help businesses establish an effective online presence and boost sales. "
    },
    {
        icon: <FaChartBar />,
        title: "CRM and ERP Software",
        description: "Integrated CRM and ERP solutions to streamline your business operations and manage customer relationships efficiently."
    }
];

const OurServices = () => {
    return (
        <div className='p-4 bg-gray-50'>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="px-4 md:px-6">
                <SectionTitle heading="Our Core Services" subHeading="Comprehensive solutions to power your digital transformation"></SectionTitle>
                    <div className="mx-auto grid items-start gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-lg border p-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                                <div className="absolute top-0 right-0 h-20 w-20 rounded-bl-full"></div>
                                <div className="relative space-y-4 flex flex-col flex-grow">
                                    <div className="rounded-lg text-4xl bg-gray-200 w-fit p-2">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{service.title}</h3>
                                    <p className="text-sm flex-grow">
                                        {service.description}
                                    </p>
                                    <span className="mt-2 block text-primary hover:underline cursor-pointer">Learn More...</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurServices;
