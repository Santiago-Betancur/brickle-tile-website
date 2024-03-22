import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
    return(
        <div className="hero-icons">
            <a href="mailto:example@example.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMapMarkerAlt} /></a>
            <a href="tel:+1234567890"><FontAwesomeIcon icon={faPhone} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
    );
}

export default Footer;