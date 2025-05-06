import { DollarSign } from "lucide-react";
import React from "react";
import SectionTitle from "../SharedComp/SectionTitle";

const pricingPlans = [
    {
        title: "Basic Website",
        price: "15,000৳ / $136",
        features: [
            "Single Page Website",
            "Responsive Design",
            "Basic SEO",
            "2 Revisions",
            "1 Month Support",
        ],
    },
    {
        title: "Pro Website with Admin Panel",
        price: "25,000৳ / $227",
        features: [
            "Multi-page Website",
            "Admin Dashboard",
            "Content Management",
            "Advanced SEO",
            "3 Revisions",
            "2 Months Support",
        ],
    },
    {
        title: "Full MERN SaaS MVP",
        price: "40,000৳+ / $364+",
        features: [
            "Complete SaaS Solution",
            "Custom Features",
            "Admin & User Dashboard",
            "API Integration",
            "Unlimited Revisions",
            "3 Months Support",
        ],
    },
    {
        title: "Monthly Maintenance",
        price: "2,000৳–5,000৳ / $18–$45",
        features: [
            "Regular Updates",
            "Security Monitoring",
            "Performance Optimization",
            "Content Updates",
            "Technical Support",
        ],
    },
];


const Pricing = () => {
    return (
        <div className="px-6 py-16 max-w-[1440px] mx-auto">
            <SectionTitle heading="Choose the perfect package for your needs" subHeading="Packages" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className="border border-gray-50 rounded-2xl py-14 px-10 shadow-lg hover:shadow-2xl transition-shadow duration-400"
                    >
                        <div className="mb-4">
                            <div className="bg-sky-100 w-10 h-10 flex items-center justify-center rounded-lg mb-4">
                                <DollarSign className="text-sky-600 w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{plan.title}</h3>
                        </div>

                        <p className="text-sky-600 text-2xl font-bold mb-4">{plan.price}</p>

                        <ul className="space-y-3 text-sm text-gray-700">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <svg
                                        className="w-4 h-4 mt-1 text-sky-500 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

    );
};


export default Pricing;
