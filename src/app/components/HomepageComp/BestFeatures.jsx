import React from 'react';
import { FaCode, FaDatabase, FaLock, FaGlobe, FaBolt, FaCommentDots } from "react-icons/fa";
import SectionTitle from '../SharedComp/SectionTitle';


const BestFeatures = () => {

    const cardData = [
        {
            icon: <FaCode className="h-10 w-10 text-primary" />,
            title: "Developer Tools",
            description: "Powerful APIs, SDKs, and integrations to build and customize your applications."
        },
        {
            icon: <FaDatabase className="h-10 w-10 text-primary" />,
            title: "Data Management",
            description: "Secure, scalable data storage with advanced analytics and reporting capabilities."
        },
        {
            icon: <FaLock className="h-10 w-10 text-primary" />,
            title: "Enterprise Security",
            description: "Industry-leading security protocols to protect your data and applications."
        },
        {
            icon: <FaGlobe className="h-10 w-10 text-primary" />,
            title: "Global Infrastructure",
            description: "Deploy your applications globally with our distributed network infrastructure."
        },
        {
            icon: <FaBolt className="h-10 w-10 text-primary" />,
            title: "AI-Powered Insights",
            description: "Leverage machine learning and AI to gain valuable insights from your data."
        },
        {
            icon: <FaCommentDots className="h-10 w-10 text-primary" />,
            title: "24/7 Support",
            description: "Dedicated support team available around the clock to help you succeed."
        }
    ];


    return (
        <div className='p-4'>
            <SectionTitle
                heading="Everything You Need to Succeed"
                subHeading="Our platform provides all the tools you need to build, deploy, and scale your applications.">
            </SectionTitle>
            <div className="mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 py-12">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-lg border p-6 transition-all hover:-translate-y-1"
                    >
                        <div className="absolute top-0 right-0 h-20 w-20"></div>
                        <div className="mb-4 flex items-center gap-2">
                            {card.icon}
                            <h3 className="text-xl font-bold">{card.title}</h3>
                        </div>
                        <p className="">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestFeatures;
