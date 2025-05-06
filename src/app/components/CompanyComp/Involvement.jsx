import React from 'react';
import { FaGlobe, FaHeart, FaBuilding } from "react-icons/fa"
import SectionTitle from '../SharedComp/SectionTitle';

const initiatives = [
    {
        icon: <FaGlobe className="text-sky-600 w-5 h-5" />,
        title: "Tech Education",
        description:
            "Providing free coding workshops and mentorship programs for underprivileged students.",
    },
    {
        icon: <FaHeart className="text-sky-600 w-5 h-5" />,
        title: "Environmental Responsibility",
        description:
            "Implementing green practices in our office and supporting environmental causes.",
    },
    {
        icon: <FaBuilding className="text-sky-600 w-5 h-5" />,
        title: "Local Community Support",
        description:
            "Active participation in local community development and charity programs.",
    },
]

const Involvement = () => {
    return (
        <div className="px-6 py-12 max-w-[1440px] mx-auto">
            <SectionTitle heading="Committed to making a positive difference" subHeading="Community Involvement" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {initiatives.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 border border-gray-100 py-12 px-4 mt-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200 "
                    >
                        <div className="bg-sky-100 p-3 w-fit rounded-md mb-4">
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Involvement;