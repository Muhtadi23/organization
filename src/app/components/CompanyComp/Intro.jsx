import Image from 'next/image';
import React from 'react';

const Intro = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-around gap-12 py-16 px-6 max-w-[1440px] mx-auto">
            {/* Text Section */}
            <div className="w-full md:w-1/2 px-4 md:px-0 max-w-2xl space-y-6 text-center md:text-left">
                <h1 className="text-purple text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    We enjoy <br className="hidden sm:block" />
                    a close cooperation <br className="hidden sm:block" />
                    with our clients
                </h1>
                <p className="text-skyBlue text-base sm:text-lg md:text-xl leading-relaxed">
                    We avoid tough coordination processes and work out our solutions through dialogue.
                    This pays off in the successful realization of project goals.
                </p>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 max-w-xl p-2">
                <Image
                    height={600}
                    width={600}
                    src="/company.png"
                    alt="Company"
                    className="w-full h-auto object-cover rounded-xl"
                />
            </div>
        </div>

    );
};

export default Intro;