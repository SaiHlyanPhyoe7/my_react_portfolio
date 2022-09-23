import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../img/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <div>
                    <li className="nav-item list-unstyled text-decoration-none ms-auto">
                        <NavLink className="nav-link text-yellow" aria-current="page" to='/' id='home' end>
                            <img src={logo} alt='shpLogo' className='logo'/>
                            <span className='ms-3 text-pink cursor'>SHPhyoe</span>
                        </NavLink>
                    </li>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item px-lg-4">
                            <NavLink href='home' className="nav-link text-yellow" aria-current="page" to='/' id='home' end>Home</NavLink>
                        </li>
                        <li className="nav-item px-lg-4">
                            <NavLink href='projects' className="nav-link text-yellow" aria-current="page" to='/projects'>Projects</NavLink>
                        </li>
                        <li className="nav-item px-lg-4">
                            <NavLink href='mySkills' className="nav-link text-yellow" aria-current="page" to='/mySkills'>My Skills</NavLink>
                        </li>
                        <li className="nav-item px-lg-4">
                            <NavLink href='about' className="nav-link text-yellow" aria-current="page" to='/about'>About</NavLink>
                        </li>
                        <li className="nav-item px-lg-4">
                            <NavLink href='contact' className="nav-link text-yellow" aria-current="page" to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;