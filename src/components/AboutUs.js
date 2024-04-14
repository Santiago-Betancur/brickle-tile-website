import React from "react";
import "./AboutUs.css";
import familyImage from "../images/aboutUsMock.webp";

function AboutUs() {
  return (
    <div className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-image-container">
          <img
            src={familyImage}
            alt="Brickle Tile Family"
            className="about-us-image"
          />
        </div>
        <div className="about-us-content">
          <h1>About Us</h1>
          <h3>Explore Elegant Flooring with Brickle Tile.</h3>
          <p>
            Led by the father-son team of Eric and Adam Brickle, we craft
            exquisite floors that combine durability and style. Specializing in
            Vinyl, Hardwood, Ceramic, and Porcelain, we ensure every project
            from classic to contemporary is executed with precision and
            elegance. At Brickle Tile, we create spaces meant to be lived in and
            loved.<br /> <br /><span>Brickle Tile: Simplicity. Elegance. Home.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
