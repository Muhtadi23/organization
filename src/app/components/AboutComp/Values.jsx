"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../SharedComp/SectionTitle";
import {
    Lightbulb,
    Users,
    Sparkles,
    ShieldCheck,
    BarChart2,
    Heart,
} from "lucide-react";

export const coreValues = [
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "We constantly push boundaries and explore new possibilities in technology.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
            "We believe in the power of teamwork and open communication.",
    },
    {
        icon: Sparkles,
        title: "Excellence",
        description:
            "We strive for perfection in everything we do, delivering the highest quality solutions.",
    },
    {
        icon: ShieldCheck,
        title: "Integrity",
        description:
            "We maintain the highest ethical standards and transparency in all our dealings.",
    },
    {
        icon: BarChart2,
        title: "Growth",
        description:
            "We are committed to continuous learning and improvement.",
    },
    {
        icon: Heart,
        title: "Passion",
        description:
            "We love what we do and are dedicated to making a positive impact.",
    },
];

// ✨ EXACT same animation settings as OurServices
const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.4,
        },
    },
};

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
};

const Values = () => {
    return (
        <section className="py-24 bg-gray-50">
            <SectionTitle subHeading="Core Values" heading="The Heart of Our Culture" />

            {/* Same grid + animation structure */}
            <motion.div
                className="max-w-[1440px] mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {coreValues.map((value, index) => {
                    const Icon = value.icon;
                    return (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group p-8 rounded-xl shadow-lg bg-white hover:shadow-2xl duration-300"
                        >
                            <div className="w-14 h-14 mb-6 flex items-center justify-center bg-sky-100 rounded-lg shadow-sm">
                                <Icon className="w-6 h-6 text-skyBlue transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-skyBlue transition-colors">
                                {value.title}
                            </h3>
                            <div className="w-10 h-0.5 bg-skyBlue my-4 group-hover:scale-x-110 transition-transform origin-left duration-300" />
                            <p className="text-sm text-grayBlue">{value.description}</p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Values;
