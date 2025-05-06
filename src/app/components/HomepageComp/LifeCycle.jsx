import Image from 'next/image';
import React from 'react';
import SectionTitle from '../SharedComp/SectionTitle';

const LifeCycle = () => {
    return (
        <div className="flex flex-col items-center px-6 py-14 max-w-[1920px] mx-auto text-white">
            <SectionTitle
                subHeading="Understand the Key Phases of"
                heading="Software Development Life Cycle"
            />
            <Image
                width={1000}
                height={1000}
                src="/sdlc.png"
                alt="Software Development Life Cycle"
                className="mt-8"
            />
            {/* <div className="w-full mx-auto mt-4"> */}
            {/* Image */}
            {/* <div className="w-full md:w-1/2"> */}

            {/* </div> */}

            {/* Description list */}
            {/* <div className="w-full md:w-1/2 grid gap-2 text-base leading-relaxed">
                    {[
                        {
                            title: "1. Brainstorming & Setting Goals",
                            desc: "Initial discussions to define project objectives, scope, and stakeholder expectations. This stage lays the foundation for the entire process.",
                        },
                        {
                            title: "2. Requirements Analysis & Planning",
                            desc: "Gathering and analyzing technical and business requirements. A clear project roadmap is created, outlining resources, risks, and timelines.",
                        },
                        {
                            title: "3. Design & Architecture",
                            desc: "Establishing the system architecture, database design, UI/UX frameworks, and choosing the right tech stack based on requirements.",
                        },
                        {
                            title: "4. Coding & Implementation",
                            desc: "Developers start building the software according to the design documents, following best practices and coding standards.",
                        },
                        {
                            title: "5. Testing & QA",
                            desc: "Conducting unit, integration, and system testing to ensure the product meets quality standards and performs as expected.",
                        },
                        {
                            title: "6. Deployment",
                            desc: "The software is released to a production environment. It may be a full launch or a phased rollout depending on the strategy.",
                        },
                        {
                            title: "7. Maintenance & Feedback",
                            desc: "Ongoing support to fix bugs, release updates, and incorporate user feedback to ensure the product evolves with user needs.",
                        }
                    ].map((step, idx) => (
                        <div key={idx} className="text-black hover:bg-purple p-3 transition hover:text-white">
                            <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                            <p className="text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div> */}
        </div>
        // </div>
    );
};

export default LifeCycle;
