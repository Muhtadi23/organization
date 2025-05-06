import About from '@/app/components/AboutComp/About';
import Values from '@/app/components/AboutComp/Values';
import Intro from '@/app/components/CompanyComp/Intro';
import Involvement from '@/app/components/CompanyComp/Involvement';
import Management from '@/app/components/CompanyComp/Management';
import Pricing from '@/app/components/CompanyComp/Pricing';
import React from 'react';

const page = () => {
    return (
        <div>
            {/* <Intro /> */}
            <About />
            <Values />
            <Management />
            <Involvement />
            <Pricing />
        </div>
    );
};

export default page;