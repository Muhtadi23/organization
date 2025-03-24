import About from '@/app/components/HomepageComp/About';
import Banner from '@/app/components/HomepageComp/Banner';
import BestFeatures from '@/app/components/HomepageComp/BestFeatures';
import OurServices from '@/app/components/HomepageComp/OurServices';
import Products from '@/app/components/HomepageComp/Products';
import React from 'react';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <About />
            <BestFeatures />
            <OurServices />
            <Products />
        </div>
    );
};

export default Homepage;