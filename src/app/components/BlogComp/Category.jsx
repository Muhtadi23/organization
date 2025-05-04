"use client"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

const categories = [
    { name: "All", slug: "all" },
    { name: "Artificial Intelligence", slug: "ai" },
    { name: "Software", slug: "software" },
    { name: "Microservice", slug: "microservice" },
    { name: "News", slug: "news" },
    { name: "Technology Consulting", slug: "consulting" },
]

const Category = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
            className="p-6 border border-gray-200 rounded-lg shadow-sm w-full"
        >
            {/* Elegant header with decorative elements */}
            <div className="relative mb-6">
                <h2 className="text-xl font-serif font-semibold text-purple mb-2">Categories</h2>
                <div className="w-12 h-px bg-purple"></div>
            </div>

            <ul className="space-y-1">
                {categories.map((category) => (
                    <li key={category.slug}>
                        <Link
                            href={`/category/${category.slug}`}
                            className="relative block"
                            onMouseEnter={() => setHoveredCategory(category.slug)}
                            onMouseLeave={() => setHoveredCategory(null)}
                        >
                            <motion.div
                                className="relative z-10 flex items-center px-4 py-2.5"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                {/* Elegant dot indicator */}
                                <motion.span
                                    className="w-1.5 h-1.5 rounded-full border border-purple"
                                    animate={{
                                        scale: hoveredCategory === category.slug ? 1 : 0.5,
                                        backgroundColor: hoveredCategory === category.slug ? "#512DA8" : "transparent",
                                    }}
                                    transition={{ duration: 0.2 }}
                                ></motion.span>

                                {/* Category name with elegant hover effect */}
                                <span
                                    className={`ml-3  ${hoveredCategory === category.slug ? "text-purple font-medium" : "text-gray-700"
                                        }`}
                                >
                                    {category.name}
                                </span>
                            </motion.div>

                            {/* Elegant line indicator on hover */}
                            {/* <motion.div
                                className="absolute left-0 right-0 bottom-0 h-px bg-purple-200"
                                initial={{ scaleX: 0, originX: 0 }}
                                animate={{
                                    scaleX: hoveredCategory === category.slug ? 1 : 0,
                                }}
                                transition={{ duration: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
                            ></motion.div> */}
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}

export default Category
