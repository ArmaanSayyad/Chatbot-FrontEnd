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
                        Armaan Sayyad is a dedicated Data Science student at Purdue University and has successfully led and executed diverse projects in AI/ML and data analytics. Armaan has experience contributing to innovative solutions like AI-powered document analyzers and video analysis applications. Passionate about leveraging technology to create meaningful impact, Armaan aims to continue driving technological advancements and making a difference through innovative solutions.
                        </p>
                    </div>
                </div>

                {/* Right Person */}
                <div className="flex flex-col items-center ml-8">
                    <div className="rounded-full h-72 w-72 overflow-hidden mb-2">
                        <img src="/pic2.jpg" alt="Person 2" className="rounded-full h-full w-full object-cover" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-xl font-semibold mb-2">Armaan Sayyad</h2>
                        <p className="text-lg">
                        Armaan Sayyad is a dedicated Data Science student at Purdue University and has successfully led and executed diverse projects in AI/ML and data analytics. Armaan has experience contributing to innovative solutions like AI-powered document analyzers and video analysis applications. Passionate about leveraging technology to create meaningful impact, Armaan aims to continue driving technological advancements and making a difference through innovative solutions.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
