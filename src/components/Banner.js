import Lottie from "lottie-react";
import React from 'react';
import animation from '../assets/animation/finance-blue.json';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 px-20">
            <div className='flex flex-col justify-center'>
                <p className='text-2xl mb-3 text-gray-800'>Welcome to my portfolio</p>
                <h2 className='text-4xl font-medium text-gray-800 mb-3'>I am Saiful Islam</h2>
                <h2 className='text-4xl font-medium text-gray-800 h-24'>I love to <span>
                    <Typewriter
                        words={['take Tea and Coffee ☕', 'Cycling 🚲', 'listen Song 🎧', 'play Cricket 🏏', 'play Football ⚽']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span></h2>

            </div>
            <div className='w-full lg:w-2/3'><Lottie animationData={animation} loop={true}></Lottie></div>
        </div>
    );
};

export default Banner;