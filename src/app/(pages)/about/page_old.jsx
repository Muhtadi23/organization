import About from '@/app/components/AboutComp/About';
import MissionVision from '@/app/components/AboutComp/MissionVision';
import Values from '@/app/components/AboutComp/Values';
import React from 'react';

const page = () => {
    return (
        <div>
            <About />
            <MissionVision />
            <Values />
        </div>
    );
};

export default page;