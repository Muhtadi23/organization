import React from 'react';

const Button = ({ title }) => {
    return (
        <button className="px-8 py-3 bg-gradient-to-r from-purple to-skyBlue text-[#fff] font-semibold shadow-2xl hover:-translate-y-1 transition-transform cursor-pointer">
            {title}
        </button>
    );
};

export default Button;