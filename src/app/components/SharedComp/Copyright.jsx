import React from 'react';

const Copyright = () => {
    return (
        <div>
            {/* Copyright */}
            <p className="text-white60 text-center py-4 bg-black90 text-sm mt-4">
                © {new Date().getFullYear()} All Rights Reserved. Design by{' '}
                <span className="font-semibold text-white">Name...</span>
            </p>
        </div>
    );
};

export default Copyright;