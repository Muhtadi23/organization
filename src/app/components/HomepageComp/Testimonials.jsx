import React from 'react';
import SectionTitle from '../SharedComp/SectionTitle';

const testimonials = [
    {
        name: "Faruq Hasan",
        role: "CEO, TechStart",
        image: "PAUL.png",
        message: "TechNest transformed our digital presence. Their team delivered exceptional results and exceeded our expectations.",
        rating: 4
    },
    {
        name: "Michael Chen",
        role: "CTO, InnovateX",
        image: "Penta.png",
        message: "Working with TechNest was a game-changer for our business. Their technical expertise and innovative solutions are unmatched.",
        rating: 5
    },
    {
        name: "Emily Rodriguez",
        role: "Marketing Director, GrowthHub",
        image: "Dexter.png",
        message: "The team at TechNest understood our vision perfectly and delivered a solution that perfectly aligned with our goals.",
        rating: 5
    }
];


const Testimonials = () => {
    return (
        <section className="py-16 w-full">
            <SectionTitle subHeading="About Us" heading="What Clients Say About Our Company?" />
            <div className="mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 mt-8 min-h-[320px] flex flex-col justify-between items-center text-center"
                    >
                        {/* Avatar and Name Block */}
                        <div className="flex flex-col items-center mb-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-14 h-14 rounded-full object-cover mb-2"
                            />
                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>

                        {/* Message */}
                        <p className="text-gray-700 text-base mb-4">{testimonial.message}</p>

                        {/* Stars */}
                        <div className="flex justify-center">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill={i < testimonial.rating ? "#facc15" : "none"}
                                    viewBox="0 0 24 24"
                                    stroke="#facc15"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.978 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.978-2.89a1 1 0 00-1.175 0l-3.978 2.89c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.978-2.89c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                    />
                                </svg>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Testimonials;
