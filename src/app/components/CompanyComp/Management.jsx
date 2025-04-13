import React from 'react';
import SectionTitle from '../SharedComp/SectionTitle';
import Image from 'next/image';

const team = [
    {
        name: 'Paul Hayemen',
        role: 'Advocate',
        image: '/PAUL.png',
    },
    {
        name: 'CM Punk',
        role: 'BITW',
        image: '/Punk.png',
    },
    {
        name: 'Dexter Lumis',
        role: 'Waytt Sics',
        image: '/Dexter.png',
    },
    {
        name: 'Penta',
        role: 'Ceido Meido',
        image: '/Penta.png',
    },
    {
        name: 'LA Knight',
        role: 'YEAH!',
        image: '/Knight.png',
    },
];

const Management = () => {
    return (
        <div className="px-4 py-12">
            <SectionTitle subHeading="Management" heading="Company Board And Management" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
                {team.map((member, index) => (
                    <div key={index} className="text-center space-y-3">
                        <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-md">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h6 className="text-black text-lg font-semibold">{member.name}</h6>
                            <p className="text-black90 text-sm">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Management;
