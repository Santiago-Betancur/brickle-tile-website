import React,{ useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
        <nav className="navbar">
            <div className="navbar-logo">BrickleTile</div>
            <div className="hamburger" aria-label="Toggle navigation" onClick={() => setIsOpen(prevState => !prevState)}>
                <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        {isOpen && (
            <div className='navbar-links'>
              <Link to="/hero-section" onClick={closeMenu}>Home</Link>
              <Link to="/about-us" onClick={closeMenu}>About Us</Link>
              <Link to="/services" onClick={closeMenu}>Services</Link>
            </div>
        )}
        </nav>
    );
}

export default Navbar;