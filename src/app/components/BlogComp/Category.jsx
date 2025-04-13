import Link from 'next/link';
import React from 'react';

const categories = [
    { name: 'All', slug: 'all' },
    { name: 'Artificial Intelligence', slug: 'ai' },
    { name: 'Software', slug: 'software' },
    { name: 'Microservice', slug: 'microservice' },
    { name: 'News', slug: 'news' },
    { name: 'Technology Consulting', slug: 'consulting' },
];

const Category = () => {
    return (
        <div className="p-4 border h-min w-full border-gray-900">
            <h2 className="text-lg text-purple font-semibold mb-4">Categories</h2>
            <ul className=" ">
                {categories.map((category) => (
                    <li key={category.slug}>
                        <Link
                            href={`/category/${category.slug}`}
                            className="block text-black90 px-4 py-2 rounded-md hover:bg-skyBlue hover:text-black hover:font-medium transition-colors"
                        >
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Category;
