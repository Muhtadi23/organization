import About from '@/app/components/HomepageComp/About';
import Banner from '@/app/components/HomepageComp/Banner';
import BestFeatures from '@/app/components/HomepageComp/BestFeatures';
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