import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        {/* Left Content Section */}
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl text-white">
                                    Accelerate Your Digital Transformation
                                </h1>
                                <p className="max-w-[600px] md:text-xl text-white60">
                                    Powerful software solutions that drive innovation and growth
                                    for forward-thinking businesses.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <button className="text-white60 flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 hover:bg-white hover:text-black transition duration-500 group">
                                    Get Started
                                    <FaArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                                </button>
                                {/* <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200">
                                    Book a Demo
                                </button> */}
                            </div>
                        </div>

                        {/* Right Code Editor UI */}
                        <div className="flex items-center justify-center">
                            <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden shadow-2xl shadow-primary/20 border border-border/50 bg-gray-900">
                                {/* Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-80"></div>

                                {/* Code Editor UI */}
                                <div className="absolute inset-0 flex flex-col p-6">
                                    {/* Header Section with File Name */}
                                    <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                                        <div className="flex gap-1">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="text-xs text-gray-400">
                                            Dashboard.tsx
                                        </span>
                                    </div>

                                    {/* Code Snippet */}
                                    <div className="flex-1 flex flex-col text-sm text-gray-300 font-mono relative overflow-hidden">
                                        <pre className="leading-relaxed">
                                            <span className="text-blue-400">const</span> future ={" "}
                                            <span className="text-purple-400">await</span>{" "}
                                            technova.transform(yourBusiness);
                                            <br />
                                            <span className="text-blue-400">function</span> transform
                                            (data) {"{"}
                                            <br />
                                            &nbsp;&nbsp;
                                            <span className="text-green-400">return</span> data.map(
                                            (item) =&gt; ({" "}
                                            <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;...item,{" "}
                                            <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;status:{" "}
                                            <span className="text-yellow-400">'optimized'</span>{" "}
                                            <br />
                                            &nbsp;&nbsp;));
                                            <br />
                                            {"}"}
                                            <br />
                                            <span className="text-blue-400">const</span> result =
                                            transform(businessData);
                                            <br />
                                            console.<span className="text-red-400">log</span>(result);
                                        </pre>

                                        {/* Fade Effect for Scroll Look */}
                                        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-gray-900"></div>
                                    </div>

                                    {/* Benefits Section */}
                                    <div className="mt-4 text-gray-300 text-sm">
                                        <h3 className="text-lg font-semibold text-white">
                                            Why Choose Us?
                                        </h3>
                                        <ul className="mt-2 space-y-2">
                                            <li className="flex items-center gap-2">
                                                <FaCheckCircle className="text-green-400" /> Scalable &
                                                Flexible Solutions
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <FaCheckCircle className="text-green-400" /> Seamless
                                                Integration & Automation
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <FaCheckCircle className="text-green-400" /> AI-Powered
                                                Insights & Growth
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Code Editor UI */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
