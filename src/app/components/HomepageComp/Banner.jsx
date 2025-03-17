import React from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const Banner = () => {
    return (
        <div>
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background to-secondary/5">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text bg-gradient-to-r from-primary to-indigo-500">
                                    Accelerate Your Digital Transformation
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    Powerful software solutions that drive innovation and growth for forward-thinking businesses.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md">
                                    Get Started <FaArrowRight className="h-4 w-4" />
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                                    Book a Demo
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl shadow-primary/20 border border-border/50 bg-gradient-to-br from-background to-secondary/10">
                                <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-white/10"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-3/4 h-3/4 bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 shadow-lg p-4 flex flex-col">
                                        <div className="flex items-center gap-2 border-b pb-2">
                                            <div className="flex gap-1">
                                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            </div>
                                            <div className="text-xs text-muted-foreground">Dashboard.tsx</div>
                                        </div>
                                        <div className="flex-1 flex items-center justify-center">
                                            <div className="text-sm text-muted-foreground font-mono">
                                                <span className="text-primary">const</span> future ={' '}
                                                <span className="text-indigo-500">await</span> technova.transform(yourBusiness);
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;