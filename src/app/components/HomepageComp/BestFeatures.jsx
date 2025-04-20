"use client"

import React from "react"
import { Factory, Handshake, MessagesSquare } from "lucide-react"
import SectionTitle from "../SharedComp/SectionTitle"
import { motion } from "framer-motion"

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.165, 0.84, 0.44, 1],
        },
    },
}

const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
        },
    },
}

const BestFeatures = () => {
    const services = [
        {
            icon: <Factory />,
            title: "Industry-Proven Quality Assurance",
            description:
                "Our German quality management system ensures that you consistently receive the highest-quality results. We meet the requirements of your quality standard through disciplined Agile Testing, Automation, and Tool-Based Metrics.",
        },
        {
            icon: <Handshake />,
            title: "Strategic Partnership",
            description:
                "Plan with certainty and scale as you need. Our strategic cooperation model provides you with dedicated experts available on a long-term basis. Enough resources at any time, conserving knowledge for future tasks and an accelerated development.",
        },
        {
            icon: <MessagesSquare />,
            title: "Seamless Communication",
            description:
                "Our proactive and honest communication is vital to the success of your project. We provide result driven project management and full transparency right from the start. You will always know what we are doing and how we are doing it.",
        },
    ]

    return (
        <section className="w-full py-24">
            <div className="w-full h-px"></div>

            <div className="container px-4 mx-auto">
                <SectionTitle heading="Things that set us apart from others" subHeading="Why Us?" />

                <div className="flex justify-center mb-16">
                    <div className="h-px w-24"></div>
                </div>

                <motion.div
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={cardVariants} className="group relative h-full">
                            <div className="h-full p-8 rounded-xl border shadow-lg transition-all duration-500 hover:shadow-xl hover:border-purple-500/30 overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-purple-500/30 rounded-bl-3xl transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-500/30 rounded-tr-3xl transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>

                                <motion.div variants={iconVariants} className="relative mb-6">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-lg border shadow-md">
                                        {React.cloneElement(service.icon, {
                                            className:
                                                "w-7 h-7 text-purple transform transition-all duration-300 ease-out group-hover:scale-110",
                                        })}
                                    </div>
                                </motion.div>

                                <div className="mb-4 relative">
                                    <h3 className="text-xl font-bold mb-2 tracking-tight group-hover:text-purple transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <div className="w-12 h-px bg-purple transform origin-left scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                                </div>

                                <p className="text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <div className="inline-flex items-center text-sm font-medium text-purple opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                    <span>Learn More</span>
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

                <div className="mt-16 text-center">
                    <button className="cursor-pointer px-8 py-3 bg-gradient-to-r from-purple to-skyBlue text-white font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        Discover Our Approach
                    </button>
                </div>
            </div>
        </section>
    )
}

export default BestFeatures
