import React from 'react';
import { Helmet } from 'react-helmet';
import picture from '../assets/photos/Anik.jpg';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Saiful | About Me</title>
            </Helmet>
            <h1 className='text-center font-bold text-4xl text-gray-700'>About Me</h1>
            <div>
                <div className='w-2/3 my-10 mx-auto flex flex-col justify-center items-center rounded shadow-xl'>
                    <img src={picture} alt="" className='rounded-2xl mb-10 w-2/3 lg:w-1/2' />
                    <h2 className='text-center text-5xl font-bold text-gray-700 mb-5'>Saiful Islam</h2>
                    <p className='text-center text-xl font-semibold text-gray-700 mb-5'>Strategic planner | Analytical thinker | Decision-maker</p>
                    <p className='text-center text-xl font-semibold text-gray-700'><a href="mailto:ma.adib3006@gmail.com">saifull.islam0708@gmail.com</a></p>
                    <p className='text-xl font-semibold text-justify text-gray-700 m-5'>I am Saiful Islam from Mirpur, Dhaka, Bangladesh. I completed BBA from Bangladesh University of Business and Technology, majoring Finance with a healthy CGPA 3.24. I took physical experience as an intern about various vouchers, how to record transaction, how to make Balance Sheet from Rio Fashion. I am highly detail-oriented individual, eager to contribute towards the building of a strong finance team. Skilled at handling Audit projects and Balance Sheets. Knowledge and understanding of various Accounting and Finance tools.</p>
                    <p className='text-center underline text-xl font-semibold text-gray-700 mb-2'>Connect Me On</p>
                    <p className='text-center text-xl font-semibold text-sky-700 mb-5'>
                        <a className='hover:underline' target="_blank" rel='noreferrer' href="https://github.com">Github</a> |
                        <a className='hover:underline' target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/saiful-islam-453565179/"> LinkedIn</a> |
                        <a className='hover:underline' target="_blank" rel='noreferrer' href="https://www.facebook.com/profile.php?id=100004501036224"> Facebook</a></p>
                </div>
            </div>
        </div>
    );
};

export default About;