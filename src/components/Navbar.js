import React, { useState } from 'react';
import '../styles.css';
import mmcLogo from '../assets/logo.jfif';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <a href="/" className="navbar-brand">
                    <img src={mmcLogo} alt="MMC College Symbol" className="navbar-logo" />
                </a>
                <button className={`navbar-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={menuActive ? 'active' : ''}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Me</a></li>
                    <li><a href="/research">Research</a></li>
                    <li><a href="/achievements">Achievements</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;


