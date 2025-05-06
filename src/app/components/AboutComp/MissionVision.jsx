import React from 'react';

const MissionVision = () => {
    return (
        <div className='grid sm:grid-cols-2 grid-cols-1 justify-center gap-8 py-40 max-w-[1440px] mx-auto px-4'>
            <div className='mx-auto max-w-[600px] py-10'>
                <h1 className="text-3xl font-bold sm:text-5xl text-purple">Our Mission</h1>
                <p className='text-base mt-4'>To empower businesses with innovative digital solutions that drive growth, efficiency, and success in the modern world. <br /> <br />

                We combine cutting-edge technology with creative thinking to deliver exceptional results for our clients..</p>
            </div>
            <div className='mx-auto max-w-[600px] py-10'>
                <h1 className="text-3xl font-bold sm:text-5xl text-purple">Our Vision</h1>
                <p className='text-base mt-4'>To be the leading digital transformation partner for businesses worldwide, known for our innovation, reliability, and commitment to excellence.</p>
            </div>
        </div>
    );
};

export default MissionVision;