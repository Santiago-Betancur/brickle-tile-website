import React from 'react';
import './AboutUs.css';
import familyImage from '../images/aboutUsMock.webp'; 

function AboutUs() {
  return (
    <div className='about-us-section'>
      <div className='about-us-container'>
       <div className='about-us-image-container'>
        <img src={familyImage} alt="Brickle Tile Family" className='about-us-image'/>
      </div> 
      <div className='about-us-content'>
        <h1>About Us</h1>
        <p>At Brickle Tile, quality flooring is our art form. 
          Under the meticulous care of father-and-son duo Eric & 
          Adam Brickle, we specialize in bringing unparalleled 
          craftsmanship to both commercial and residential spaces. 
          Our expertise spans across Vinyl, Ceramic, Porcelain, 
          Hardwood, and Floating Floors, with each installation 
          reflecting our passion for detail and design. 
          Our approach is rooted in simplicity, yielding elegance 
          in every project from the timeless finish of polished 
          ceramics to the contemporary flair of dark grey subway tiles.
          The spaces we enhance are designed to be lived in, loved,
          and cherished.
          We invite you to explore the possibilities with Brickle Tile,
          where every floor we lay is the foundation for life's beautiful moments. 
          Brickle Tile Simplicity. Elegance. Home.
        </p>
      </div>
    </div>
    </div>
  );
}

export default AboutUs;
