import About from '@/app/components/HomepageComp/About';
import Banner from '@/app/components/HomepageComp/Banner';
import BestFeatures from '@/app/components/HomepageComp/BestFeatures';
import LifeCycle from '@/app/components/HomepageComp/LifeCycle';
import OurServices from '@/app/components/HomepageComp/OurServices';
import Products from '@/app/components/HomepageComp/Products';
import StayConnected from '@/app/components/HomepageComp/StayConnected';
import Testimonials from '@/app/components/HomepageComp/Testimonials';
import TechStack from '@/app/components/SharedComp/TechStack';
import React from 'react';

const Homepage = () => {
    return (
        <div>
            <Banner />
            {/* <About /> */}
            <OurServices />
            <BestFeatures />
            <LifeCycle />
            <Products />
            <Testimonials />
            <StayConnected />
            <TechStack />
        </div>
    );
};

export default Homepage;