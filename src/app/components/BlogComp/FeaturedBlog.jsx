import React from 'react';
import Image from 'next/image';

const FeaturedBlog = () => {
    return (
        <div className="px-4">
            <div className="">
                <Image
                    width={1000}
                    height={600}
                    src="/ChatGPT.jpg"
                    alt="featured blog"
                    className='h-auto object-cover'
                />
            </div>
            <div className="">
                <h2 className="text-2xl font-bold mb-2 text-white">Title of the blog</h2>
                <p className="text-sm text-gray-500 mb-4">
                    <strong className="text-gray-700">By John Doe</strong> | <em>April 9, 2025</em>
                </p>
                <p className="text-white60 leading-relaxed">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, nulla? Amet ratione ipsam praesentium
                    repellat odio rerum hic, maxime quas, at molestiae deleniti blanditiis nulla minus iure nesciunt
                    nobis cupiditate illum expedita! Ipsum non magnam maiores accusamus asperiores aliquid aliquam.
                </p>
            </div>
        </div>
    );
};

export default FeaturedBlog;
