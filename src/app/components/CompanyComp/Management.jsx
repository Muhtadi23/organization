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
        role: 'Cero Meido',
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10 max-w-[1440px] mx-auto">
                {team.map((member, index) => (
                    <div key={index} className="text-center space-y-4">
                        <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover rounded-full"
                            />
                        </div>
                        <div>
                            <h3 className="text-black text-3xl font-bold">{member.name}</h3>
                            <p className="text-skyBlue text-lg">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Management;
