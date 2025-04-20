"use client"

import React from "react"
import { Store, BarChart3, Users, ShoppingCart, Settings, Headphones } from "lucide-react"
import { motion } from "framer-motion"
import SectionTitle from "../SharedComp/SectionTitle"

const cardData = [
    {
        icon: <Store />,
        title: "Point of Sale (POS)",
        description:
            "Optimize your in-store sales with a user-friendly POS system that supports multiple payment methods, tracks inventory in real-time, generates receipts, and provides detailed sales analytics for smarter business decisions.",
    },
    {
        icon: <BarChart3 />,
        title: "Enterprise Resource Planning (ERP)",
        description:
            "Seamlessly connect finance, human resources, procurement, inventory, and other departments with a centralized ERP system. Gain full visibility into operations, automate workflows, and boost productivity across your organization.",
    },
    {
        icon: <Users />,
        title: "Customer Relationship Management (CRM)",
        description:
            "Build stronger customer relationships by managing contacts, tracking interactions, automating marketing efforts, and monitoring sales pipelines. Our CRM system empowers your team to deliver personalized customer experiences at scale.",
    },
    {
        icon: <ShoppingCart />,
        title: "E-Commerce Solutions",
        description:
            "Launch and grow your online store with a feature-rich e-commerce platform. Manage products, orders, payments, promotions, and shipping all in one place. Integrate with third-party tools to scale your business globally.",
    },
    {
        icon: <Settings />,
        title: "Custom Software Development",
        description:
            "We develop tailored software solutions to meet your specific business challenges. Whether it's automating internal processes or building customer-facing applications, our development team delivers scalable, secure, and modern systems.",
    },
    {
        icon: <Headphones />,
        title: "Dedicated Support",
        description:
            "Our expert support team is available 24/7 to assist you with troubleshooting, updates, and technical guidance. We're committed to ensuring your systems run smoothly so you can focus on growing your business.",
    },
]

const OurServices = () => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.165, 0.84, 0.44, 1],
            },
        },
    }

    return (
        <section className="relative w-full py-24 md:py-32">
            <div className="container relative z-10 px-4 md:px-6 mx-auto">
                <SectionTitle heading="Design. Develop. Roll-Out. Maintain." subHeading="Our Services" />

                <motion.div
                    className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:gap-10 mt-16"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {cardData.map((card, index) => (
                        <motion.div key={index} variants={cardVariants} className="group relative">
                            <div className="h-full p-8 md:p-10 rounded-xl border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-lg hover:border-purple-300">
                                {/* Icon container */}
                                <div className="relative mb-8 inline-flex">
                                    <div className="relative flex items-center justify-center w-14 h-14 rounded-full border border-purple-200">
                                        {React.cloneElement(card.icon, {
                                            className:
                                                "h-6 w-6 text-purple transform transition-all duration-300 ease-out group-hover:scale-110",
                                        })}
                                    </div>
                                </div>

                                {/* Title */}

                                <div className="mb-4 relative">
                                    <h3 className="text-xl font-bold mb-2 tracking-tight group-hover:text-purple transition-colors duration-300">
                                        {card.title}
                                    </h3>
                                    <div className="w-12 h-px bg-purple transform origin-left scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                                </div>

                                {/* Description */}
                                <p className="text-sm leading-relaxed text-gray-600">{card.description}</p>

                                {/* Learn more link */}
                                <div className="mt-6 inline-flex items-center text-sm font-medium text-purple opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                    <span>Learn more</span>
                                    <svg
                                        className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <div className="mt-20 text-center">
                    <button className="cursor-pointer px-8 py-3 bg-gradient-to-r from-purple to-skyBlue text-white font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        Explore All Services
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OurServices
