import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.png';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/about'>About Me</Link></li>
                        <li><Link to='/about'>Education</Link></li>
                        <li><Link to='/about'>Skills</Link></li>
                        <li><Link to='/projects'>Experience</Link></li>
                        <li><Link to='/blog'>Hobbies</Link></li>
                        <li><a href='#contact'>Contact Info</a></li>
                        <Link className='btn btn-outline' to="/files/resume.pdf" target="_blank" download>Resume</Link>
                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost normal-case text-xl"><img className='w-48' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/about'>About Me</Link></li>
                    <li><Link to='/about'>Education</Link></li>
                    <li><Link to='/about'>Skills</Link></li>
                    <li><Link to='/projects'>Experience</Link></li>
                    <li><Link to='/blog'>Hobbies</Link></li>
                    <li><a href='#contact'>Contact Info</a></li>
                    {/* <Link className='btn btn-outline' to="/files/resume.pdf" target="_blank" download>Resume</Link> */}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;