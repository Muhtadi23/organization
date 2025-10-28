"use client"

import React from "react"
import { Store, BarChart3, Users, ShoppingCart, Settings, Headphones } from "lucide-react"
import { motion } from "framer-motion"
import SectionTitle from "../SharedComp/SectionTitle"
import Button from "../SharedComp/Button"

const cardData = [
    {
        icon: <Store />,
        title: "Point of Sale (POS)",
        description:
            "Optimize your in-store sales with a user-friendly POS system supporting multiple payments, real-time inventory, receipts, and analytics.",
    },
    {
        icon: <BarChart3 />,
        title: "Enterprise Resource Planning (ERP)",
        description:
            "Centralize operations with ERP—connect finance, HR, procurement, inventory, and more. Automate workflows and boost productivity.",
    },
    {
        icon: <Users />,
        title: "Customer Relationship Management (CRM)",
        description:
            "Manage contacts, automate marketing, and monitor sales pipelines to deliver personalized customer experiences at scale.",
    },
    {
        icon: <ShoppingCart />,
        title: "E-Commerce Solutions",
        description:
            "Launch and manage your online store with features like product/order management, promotions, shipping, and global integrations.",
    },
    {
        icon: <Settings />,
        title: "Custom Software Development",
        description:
            "Get tailored software for your unique needs—automate processes or build secure, scalable customer-facing applications.",
    },
    {
        icon: <Headphones />,
        title: "Dedicated Support",
        description:
            "Access 24/7 expert support for troubleshooting, updates, and guidance. We're here to keep your systems running smoothly.",
    },
]

const OurServices = () => {
    
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.4,
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    }

    return (
        <section className="max-w-[1920px] mx-auto py-24 md:py-32 ">
            <div className="container px-4 md:px-6 mx-auto">
                <SectionTitle heading="Design. Develop. Roll-Out. Maintain." subHeading="Our Services" />

                <motion.div
                    className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {cardData.map((card, index) => (
                        <motion.div key={index} variants={cardVariants} className="group p-8 md:p-10 rounded-xl shadow-lg hover:shadow-2xl">
                            <div className="mb-8 w-14 h-14 flex items-center justify-center border rounded-full border-purple-200">
                                {React.cloneElement(card.icon, {
                                    className: "h-6 w-6 text-purple transition-transform duration-300 group-hover:scale-110",
                                })}
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-purple transition-colors">
                                {card.title}
                            </h3>
                            <div className="w-12 h-px bg-purple scale-0 group-hover:scale-100 transition-transform duration-500 origin-left"></div>
                            <p className="text-sm text-gray-600 mt-4">{card.description}</p>
                            <div className="mt-6 text-sm text-purple font-medium opacity-0 group-hover:opacity-100 transform transition-all duration-300 flex items-center">
                                <span>Learn more</span>
                                <svg
                                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-20 text-center">
                    <Button title="Explore All Services" />
                </div>
            </div>
        </section>
    )
}

export default OurServices
