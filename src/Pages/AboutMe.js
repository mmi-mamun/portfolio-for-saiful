import React from 'react';
import PersonalInformation from '../components/PersonalInformation';
import About from './About';

const AboutMe = () => {
    return (
        <div>
            <About></About>
            <h3 className="text-3xl text-center font-bold mt-16 uppercase">Personal Information</h3>
            <PersonalInformation></PersonalInformation>
        </div>
    );
};

export default AboutMe;