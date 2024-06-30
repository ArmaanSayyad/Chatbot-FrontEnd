// About.js
import React from 'react';

export default function About() {
    return (
        <div className="container mx-auto px-4 py-8">

            <div className="flex justify-center items-center mb-72 mt-20">
                {/* Left Person */}
                <div className="flex flex-col items-center">
                    <div className="rounded-full h-72 w-72 overflow-hidden mb-2">
                        <img src="/pic1.jpg" alt="Person 1" className="rounded-full h-full w-full object-cover" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-xl font-semibold mb-2">Aayaan Sayyad</h2>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ante at urna pretium pellentesque.
                        </p>
                    </div>
                </div>

                {/* Right Person */}
                <div className="flex flex-col items-center ml-8">
                    <div className="rounded-full h-72 w-72 overflow-hidden mb-2">
                        <img src="/pic1.jpg" alt="Person 2" className="rounded-full h-full w-full object-cover" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-xl font-semibold mb-2">Aayaan Sayyad</h2>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ante at urna pretium pellentesque.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
