import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
    const [isHamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!isHamburgerOpen);
    };

    return (
        <nav className="navbar">
            <div className="brand">
                <span>TRRBS</span>
            </div>
            <div className={`links ${isHamburgerOpen ? 'open' : ''}`}>
                <a href="../HomePage">Home</a>
                <a href="../Login">Login</a>
                <a href="../BookingPage">Bus Schedule</a>

            </div>
            <div className="hamburger" onClick={toggleHamburger}>
                <div className={`bar ${isHamburgerOpen ? 'open' : ''}`} />
                <div className={`bar ${isHamburgerOpen ? 'open' : ''}`} />
                <div className={`bar ${isHamburgerOpen ? 'open' : ''}`} />
            </div>
        </nav>
    );
}

export default Nav;