'use client';

import { Factory, BrainCircuit, Handshake, MessagesSquare } from 'lucide-react';
import SectionTitle from "../SharedComp/SectionTitle";
import { motion } from "framer-motion";

// Parent container variant for staggering animation
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

// Child animation variant for cards
const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const BestFeatures = () => {
    const services = [
        {
            icon: <Factory  className="w-8 h-8"/>, // or any other size/className you prefer
            title: "Industry-Proven Quality Assurance",
            description:
                "Our German quality management system ensures that you consistently receive the highest-quality results. We meet the requirements of your quality standard through disciplined Agile Testing, Automation, and Tool-Based Metrics."
        },
        // {
        //     icon: <BrainCircuit  className="w-8 h-8" />,
        //     title: "Highly Qualified Developers",
        //     description:
        //         "Our developers are highly educated software engineers with industry and research experience. A professional team of experts committed to continuously learn and innovate. Let's build new software together or enhance your current solution at the optimum cost."
        // },
        {
            icon: <Handshake  className="w-8 h-8" />,
            title: "Strategic Partnership",
            description:
                "Plan with certainty and scale as you need. Our strategic cooperation model provides you with dedicated experts available on a long-term basis. Enough resources at any time, conserving knowledge for future tasks and an accelerated development."
        },
        {
            icon:  <MessagesSquare className="w-8 h-8" />,
            title: "Seamless Communication",
            description:
                "Our proactive and honest communication is vital to the success of your project. We provide result driven project management and full transparency right from the start. You will always know what we are doing and how we are doing it."
        }
    ];

    return (
        <div className="p-4">
            <SectionTitle
                heading="Things that set us apart from others"
                subHeading="Why Us?"
            />
            {/* Animated Grid Container */}
            <motion.div
                className="mx-auto grid items-start gap-8 py-20 md:grid-cols-2 lg:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={fadeUpVariants}
                        className="group relative overflow-hidden p-6 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col bg-black90"
                    >
                        <div className="absolute top-0 right-0 h-20 w-20 rounded-bl-full"></div>
                        <div className="relative space-y-4 flex flex-col flex-grow">
                            <div className="rounded-lg text-4xl bg-gray-200 w-fit p-2">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white">{service.title}</h3>
                            <p className="text-sm flex-grow text-white60">
                                {service.description}
                            </p>
                            <span className="mt-2 block text-primary hover:underline cursor-pointer text-white">Learn More...</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default BestFeatures;
