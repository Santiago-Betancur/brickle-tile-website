import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">BT</div>
            <div className="navbar-links">
                <Link to="/hero-section" >Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/services">Services</Link>
            </div>
        </nav>
    );
}

export default Navbar;