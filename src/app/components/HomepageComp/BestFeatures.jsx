"use client"

import React from "react"
import { Factory, Handshake, MessagesSquare } from "lucide-react"
import { motion } from "framer-motion"
import SectionTitle from "../SharedComp/SectionTitle"
import Button from "../SharedComp/Button"

const featureData = [
    {
        icon: <Factory />,
        title: "Proven Quality Assurance",
        description:
            "German-standard QA through Agile Testing, automation, and tool-based metrics to deliver reliable results consistently.",
    },
    {
        icon: <Handshake />,
        title: "Strategic Partnership",
        description:
            "Dedicated experts, long-term cooperation, and flexible scaling ensure efficient, knowledge-driven development.",
    },
    {
        icon: <MessagesSquare />,
        title: "Clear Communication",
        description:
            "Transparent updates, honest feedback, and proactive project management for a smooth and result-driven experience.",
    },
]

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

const BestFeatures = () => {
    return (
        <section className="max-w-[1440px] mx-auto py-24 md:py-32">
            <div className="container px-4 md:px-6 mx-auto">
                <SectionTitle heading="Things that set us apart from others" subHeading="Why Us?" />

                <motion.div
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {featureData.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group p-8 md:p-10 rounded-xl shadow-sm hover:shadow-lg"
                        >
                            <div className="mb-8 w-14 h-14 flex items-center justify-center border rounded-full border-purple-200">
                                {React.cloneElement(feature.icon, {
                                    className: "h-6 w-6 text-purple transition-transform duration-300 group-hover:scale-110",
                                    "aria-hidden": true,
                                })}
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-purple transition-colors">
                                {feature.title}
                            </h3>
                            <div className="w-12 h-px bg-purple scale-0 group-hover:scale-100 transition-transform duration-500 origin-left mb-4"></div>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                            <div className="mt-6 text-sm text-purple font-medium opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 delay-150 flex items-center">
                                <span>Learn More</span>
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
                    <Button title="Discover Our Approach" />
                </div>
            </div>
        </section>
    )
}

export default BestFeatures
