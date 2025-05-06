import React from 'react';
import Button from '../SharedComp/Button';

const StayConnected = () => {
    return (
        <div className="py-32 px-6 bg-purple text-center mb-8">
            <div className="">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                    Stay Updated
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white font-medium mb-6">
                    Subscribe to our newsletter for the latest updates, insights, and tech trends.
                </p>
                <form className="flex flex-col sm:flex-row justify-center items-center gap-3">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full sm:w-[400px] px-4 py-3 rounded-md border border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                    />
                    <Button title="Subscribe" />
                </form>
            </div>
        </div>
    );
};

export default StayConnected;
