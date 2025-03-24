import React from 'react';
import { FaArrowRight, FaPhone } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const Page = () => {
    return (
        <div className='w-full py-12 md:py-24 lg:py-32 xl:py-48 grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-24'>
            {/* Left Section */}
            <div className='flex flex-col justify-center space-y-6'>
                <div className="space-y-4">
                    <h1 className='text-3xl font-bold sm:text-5xl xl:text-6xl'>Let's Build Something Amazing Together</h1>
                    <p className='max-w-[600px] md:text-xl text-gray-600'>
                        Ready to transform your business? Our team is here to help you get started.
                    </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200 transition">
                        Choose a Demo <FaArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </div>

                {/* Form Section */}
                <div className='bg-gray-100 p-6 md:p-8 rounded-xl shadow-md'>
                    <form className="space-y-4">
                        {/* Purpose Selection */}
                        <div>
                            <label className="block font-bold mb-1">Select Your Purpose</label>
                            <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                                <option disabled selected>Choose an option</option>
                                <option>Web Development</option>
                                <option>Software Development</option>
                                <option>Mobile App Development</option>
                                <option>Digital Marketing</option>
                            </select>
                        </div>

                        {/* Name & Email */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <label className="block font-bold mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-bold mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Company Name */}
                        <div>
                            <label className="block font-bold mb-1">Company</label>
                            <input
                                type="text"
                                name="company"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="mt-4">
                            <button type="submit" className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default Page;
