import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './HeroSection.css';

function HeroSection() {
    return(
        <div className="hero-section">
            <h1>Brickle Tile</h1>
            <p>Your trusted partner for high-quality tile installations.</p>
            <button>Get a Free Quote</button>
            <div className="hero-icons">
                <a href="mailto:example@example.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMapMarkerAlt} /></a>
                <a href="tel:+1234567890"><FontAwesomeIcon icon={faPhone} /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </div>
    );
}

export default HeroSection;