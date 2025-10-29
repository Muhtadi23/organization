import Image from 'next/image';
import React from 'react';
import SectionTitle from './SectionTitle';
import Marquee from 'react-fast-marquee';

const techStack = [
    { name: "ReactJs", image: "/react-original.svg" },
    { name: "NodeJs", image: "/nodejs-original.svg" },
    { name: "Docker", image: "/docker-original.svg" },
    { name: "NodeJs", image: "/nodejs-original.svg" },
    { name: "Docker", image: "/docker-original.svg" },
    { name: "ReactJs", image: "/react-original.svg" },
    { name: "ReactJs", image: "/react-original.svg" },
    { name: "ReactJs", image: "/react-original.svg" },
];

const TechStack = () => {
    return (
        <section className="py-16 px-4 max-w-[1440px] mx-auto">
            <SectionTitle
                subHeading="Tech Stack"
                heading="Modern Tech Stack for Scalable Solutions"
            />

            {/* Marquee section */}
            <Marquee
                gradient={false}
                speed={50}
                pauseOnHover={true}
                className="mt-10"
            >
                {techStack.map((tech, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center text-center shadow-md bg-white px-10 py-6 rounded-xl mx-6 hover:shadow-2xl transition-all duration-300 ease-in-out"
                    >
                        <Image
                            src={tech.image}
                            width={60}
                            height={60}
                            alt={tech.name}
                            className="object-contain"
                        />
                        <h2 className="mt-3 text-lg font-semibold text-gray-700">
                            {tech.name}
                        </h2>
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default TechStack;
