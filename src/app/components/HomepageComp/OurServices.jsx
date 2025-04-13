'use client'
import React from 'react';
import {
    Store,
    BarChart3,
    Users,
    ShoppingCart,
    Settings,
    Headphones
} from "lucide-react";
import SectionTitle from '../SharedComp/SectionTitle';
import { motion } from 'framer-motion';

// Parent variant for staggering children
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2, // delay between each card animation
        },
    },
};

// Child card animation variant
const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Services data array

const cardData = [
    {
        icon: <Store className="h-10 w-10 text-primary" />,
        title: "Point of Sale (POS)",
        description:
            "Optimize your in-store sales with a user-friendly POS system that supports multiple payment methods, tracks inventory in real-time, generates receipts, and provides detailed sales analytics for smarter business decisions."
    },
    {
        icon: <BarChart3 className="h-10 w-10 text-primary" />,
        title: "Enterprise Resource Planning (ERP)",
        description:
            "Seamlessly connect finance, human resources, procurement, inventory, and other departments with a centralized ERP system. Gain full visibility into operations, automate workflows, and boost productivity across your organization."
    },
    {
        icon: <Users className="h-10 w-10 text-primary" />,
        title: "Customer Relationship Management (CRM)",
        description:
            "Build stronger customer relationships by managing contacts, tracking interactions, automating marketing efforts, and monitoring sales pipelines. Our CRM system empowers your team to deliver personalized customer experiences at scale."
    },
    {
        icon: <ShoppingCart className="h-10 w-10 text-primary" />,
        title: "E-Commerce Solutions",
        description:
            "Launch and grow your online store with a feature-rich e-commerce platform. Manage products, orders, payments, promotions, and shipping all in one place. Integrate with third-party tools to scale your business globally."
    },
    {
        icon: <Settings className="h-10 w-10 text-primary" />,
        title: "Custom Software Development",
        description:
            "We develop tailored software solutions to meet your specific business challenges. Whether it's automating internal processes or building customer-facing applications, our development team delivers scalable, secure, and modern systems."
    },
    {
        icon: <Headphones className="h-10 w-10 text-primary" />,
        title: "Dedicated Support",
        description:
            "Our expert support team is available 24/7 to assist you with troubleshooting, updates, and technical guidance. We’re committed to ensuring your systems run smoothly so you can focus on growing your business."
    }
];


const OurServices = () => {
    return (
        <div className='p-4'>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="px-4 md:px-6">
                    <SectionTitle heading="Design. Develop. Roll-Out. Maintain." subHeading="Our Services" />

                    {/* Grid wrapper with parent motion for staggering */}

                    <motion.div
                        className="mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 py-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {cardData.map((card, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUpVariants}
                                className="group relative flex flex-col justify-between shadow shadow-gray-900 h-full p-6 hover:-translate-y-1  hover:bg-purple hover:text-white"
                            >
                                <div className=''>
                                    <div className="mb-4 flex items-center gap-2">
                                        <span className=''>{card.icon}</span>
                                        <h3 className="text-xl font-bold ">{card.title}</h3>
                                    </div>
                                    <p className="text-sm">{card.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default OurServices;
