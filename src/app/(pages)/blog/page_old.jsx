'use client'
import Category from '@/app/components/BlogComp/Category';
import FeaturedBlog from '@/app/components/BlogComp/FeaturedBlog';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='flex md:flex-row flex-col-reverse gap-4'>
                <FeaturedBlog />
                <Category />
            </div>
            <div>

            </div>
        </div>

    );
};

export default page;