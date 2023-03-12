import React from 'react';
import word from '../assets/icons/ms-word.png';
import excel from '../assets/icons/ms-excel.png';
import erp from '../assets/icons/erp.png';
import browsing from '../assets/icons/net-browsing.png';
import right from '../assets/icons/right.jpg';


const Skills = () => {
    return (
        <div className='mb-10'>
            <h1 className="text-center text-4xl font-bold text-gray-700 py-5">Hard Skills</h1>
            <div className='flex flex-wrap gap-3 items-center justify-center mb-10'>
                <img className="w-16 mr-3" src={word} alt="" />
                <img className="w-16 mr-3" src={excel} alt="" />
                <img className="w-16 mr-3" src={erp} alt="" />
                <img className="w-16 mr-3" src={browsing} alt="" />
            </div>

            <h1 className="text-center text-4xl font-bold text-gray-700 py-5">Soft Skills</h1>
            <div className="grid grid-cols-1 px-20">
                <div>
                    <div className="flex items-center">
                        <img className="w-10 mr-2" src={right} alt="" />
                        <p className="text-xl font-semibold">Strategic Planning</p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 mr-2" src={right} alt="" />
                        <p className="text-xl font-semibold">Analytical Thinking</p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 mr-2" src={right} alt="" />
                        <p className="text-xl font-semibold">Problem Solving</p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 mr-2" src={right} alt="" />
                        <p className="text-xl font-semibold">Decision Making</p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 mr-2" src={right} alt="" />
                        <p className="text-xl font-semibold">Detail Oriented</p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 mr-2" src={right} alt="" />
                        <p className="text-xl font-semibold">Cash Flow Management</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;