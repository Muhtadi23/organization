import About from '@/app/components/Homepage Comp/About';
import Banner from '@/app/components/Homepage Comp/Banner';
import BestFeatures from '@/app/components/Homepage Comp/BestFeatures';
import React from 'react';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <About />
            <BestFeatures />
        </div>
    );
};

export default Homepage;