"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight } from "lucide-react"

const FeaturedBlog = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
            className="max-w-5xl mx-auto px-4 py-12"
        >
            <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Image Section */}
                <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg shadow-md group">
                    <div className="absolute inset-0 border border-gray-200 rounded-lg z-10" />
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
                    >
                        <Image
                            src="/ChatGPT.jpg"
                            alt="featured blog"
                            width={1000}
                            height={600}
                            className="w-full rounded-lg object-cover transition-transform duration-700"
                        />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    </motion.div>
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-purple-500 rounded-tl-lg" />
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-purple-500 rounded-br-lg" />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 relative pl-4">
                    <div className="absolute -left-4 top-0 bottom-0 w-px border-l border-gray-200" />

                    <div className="mb-4">
                        <span className="text-xs font-semibold tracking-wider text-purple uppercase border border-purple-200 rounded-full px-3 py-1">
                            Technology
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-gray-900">
                        The Future of AI in Business Applications
                    </h2>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-5">
                        <div className="flex items-center gap-1">
                            <User size={14} className="text-purple" />
                            <span className="font-medium">John Doe</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar size={14} className="text-purple" />
                            <span>April 9, 2025</span>
                        </div>
                    </div>

                    <div className="w-16 h-px bg-purple mb-5" />

                    <p className="text-gray-700 leading-relaxed mb-6 font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non magnam maiores accusamus asperiores
                        aliquid aliquam.
                    </p>

                    <motion.div
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-purple font-medium cursor-pointer group"
                    >
                        <span>Continue Reading</span>
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default FeaturedBlog
