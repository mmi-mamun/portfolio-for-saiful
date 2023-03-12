import React from 'react';
import Banner from '../components/Banner';
import { Helmet } from "react-helmet";
import Contact from '../components/Contact';
import About from './About';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Saiful | Home</title>
            </Helmet>

            <Banner></Banner>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;