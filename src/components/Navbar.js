import React,{ useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
   
    return (
        <nav className="navbar">
            <div className="navbar-logo">BT</div>
            <div className="hamburger" aria-label="Toggle navigation" onClick={() => setIsOpen(prevState => !prevState)}>
                <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        {isOpen && (
            <div className='navbar-links'>
              <Link to="/hero-section" >Home</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/services">Services</Link>
            </div>
        )}
        </nav>
    );
}

export default Navbar;