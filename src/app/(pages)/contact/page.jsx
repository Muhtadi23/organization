import Image from 'next/image';
import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const page = () => {
    return (
        <div className="w-full py-16 px-6 md:px-12 bg-white text-gray-800">
            {/* Top Section with heading and image */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                        Let's Build Something Amazing Together
                    </h1>
                    <p className="max-w-xl text-gray-600 md:text-lg">
                        Ready to transform your business? Our team is here to help you get started with customized software solutions.
                    </p>
                </div>

                <div className="flex justify-center">
                    <Image
                        src="/contact.png"
                        width={600}
                        height={600}
                        alt="Contact Us"
                        className="w-full max-w-md object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Contact Section */}
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-16">
                {/* Left Info Box */}
                <div className="space-y-6">
                    <div>
                        <h4 className='text-xl font-semibold mb-2'>Our Location</h4>
                        <p>2/H, 2/23 Mirpur<br />Dhaka 1216, Bangladesh</p>
                        <p className='flex items-center gap-2 mt-3 text-gray-700'>
                            <MdEmail className="text-rose-500" /> info@skyit-bd.com
                        </p>
                    </div>

                    <div>
                        <h4 className='text-xl font-semibold mt-6'>Say Hello</h4>
                        <p className='flex items-center gap-2 text-gray-700'>
                            <FaPhone className="text-rose-500" /> +092394779303
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="bg-[#fefafa] w-full px-4 py-3 rounded-full border border-[#f9eaea] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-200"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-[#fefafa] w-full px-4 py-3 rounded-full border border-[#f9eaea] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-200"
                            required
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Subject"
                        className="bg-[#fefafa] w-full px-4 py-3 rounded-full border border-[#f9eaea] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-200"
                        required
                    />

                    <textarea
                        placeholder="Your Comment"
                        rows={5}
                        className="bg-[#fefafa] w-full px-4 py-3 rounded-2xl border border-[#f9eaea] placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-rose-200"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-rose-400 to-rose-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Send Your Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default page;
