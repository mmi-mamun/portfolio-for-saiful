import React from 'react';
import word from '../assets/icons/ms-word.png';
import excel from '../assets/icons/ms-excel.png';
import erp from '../assets/icons/erp.png';
import browsing from '../assets/icons/net-browsing.png';
import right from '../assets/icons/right.jpg';
import { Helmet } from 'react-helmet';


const Skills = () => {
    return (
        <div className='my-12'>
            <Helmet>
                <title>Saiful | Skill</title>
            </Helmet>


            <h1 className="text-center text-4xl font-bold text-gray-700 py-5">Hard Skills</h1>
            <div className='flex flex-wrap gap-3 items-center justify-center mb-10'>
                <img className="w-16 mr-3" src={word} alt="" />
                <img className="w-16 mr-3" src={excel} alt="" />
                <img className="w-16 mr-3" src={erp} alt="" />
                <img className="w-16 mr-3" src={browsing} alt="" />
            </div>

            <div className="divider">*</div>

            <h1 className="text-center text-4xl font-bold text-gray-700 py-5">Soft Skills</h1>
            <div className="grid grid-cols-1 px-20">
                <div>
                    <div className="flex items-center">
                        <img className="w-10 mr-2" src={right} alt="" />
                        <p className="text-xl font-semibold">Strategic Planning</p>
                    </div>
                    <p className="text-xl pb-6 text-justify">a process in which an organization's leaders define their vision for the future and identify their organization's goals and objectives.  </p>


                    <div className="flex items-center">
                        <img className="w-10 mr-2" src={right} alt="" />
                        <p className="text-xl font-semibold">Analytical Thinking</p>
                    </div>
                    <p className="text-xl text-justify pb-6">Must be able to identify and define problems, extract key information from data and develop workable solutions.</p>


                    <div className="flex items-center">
                        <img className="w-10 mr-2" src={right} alt="" />
                        <p className="text-xl font-semibold">Problem Solving</p>
                    </div>
                    <p className="text-xl pb-6 text-justify">Problem solving is the act of defining a problem; determining the cause of the problem; identifying, prioritizing, and selecting alternatives for a solution </p>


                    <div className="flex items-center">
                        <img className="w-10 mr-2" src={right} alt="" />
                        <p className="text-xl font-semibold">Decision Making</p>
                    </div>
                    <p className="text-xl pb-6 text-justify">The process of making choices by identifying a decision, gathering information, and assessing alternative resolutions.</p>


                    <div className="flex items-center">
                        <img className="w-10 mr-2" src={right} alt="" />
                        <p className="text-xl font-semibold">Detail Oriented</p>
                    </div>
                    <p className="text-xl pb-6 text-justify">very interested in and paying a lot of attention to details.</p>


                    <div className="flex items-center">
                        <img className="w-10 mr-2" src={right} alt="" />
                        <p className="text-xl font-semibold">Cash Flow Management</p>
                    </div>
                    <p className="text-xl pb-6 text-justify">the process of understanding and optimizing the amount of money, cash and non-cash, moving into and out of a business.</p>
                </div>

            </div>
        </div>
    );
};

export default Skills;