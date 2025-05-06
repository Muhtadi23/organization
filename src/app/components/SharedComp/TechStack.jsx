import Image from 'next/image';
import React from 'react';
import SectionTitle from './SectionTitle';

const techStack = [
    {
        name: "ReactJs",
        image: "react-original.svg",
    },
    {
        name: "NodeJs",
        image: "nodejs-original.svg",
    },
    {
        name: "Docker",
        image: "docker-original.svg",
    },
    {
        name: "ReactJs",
        image: "react-original.svg",
    },
    {
        name: "NodeJs",
        image: "nodejs-original.svg",
    },
    {
        name: "Docker",
        image: "docker-original.svg",
    },
];

const TechStack = () => {
    return (
        <section className="py-16 px-4 max-w-[1440px] mx-auto">
            <SectionTitle subHeading="Tech Stack" heading="Modern Tech Stack for Scalable Solutions"/>
            <div className="w-full mx-auto flex flex-wrap justify-center items-center gap-10">
                {techStack.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center text-center shadow-lg px-14 py-8 rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mt-8">
                        <Image
                            src={tech.image}
                            width={60}
                            height={60}
                            alt={tech.name}
                        />
                        <h2 className="mt-4 text-lg font-semibold text-gray-700">{tech.name}</h2>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
