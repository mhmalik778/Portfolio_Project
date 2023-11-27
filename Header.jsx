import React, { useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


const Header = () => {
  

  const linkStyle = {
    cursor: 'pointer', 
  };

  return (
    <div>
      <div className="scroll-button">
        <a onClick={() => scroll.scrollToTop()}>
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
      <nav>
        <div className="navbar" id="navbar">
          <div className="logo">
            <a href="#">ELITE WP</a>
          </div>
          <ul className="menu">
            <li>
              <Link to="home" smooth={true} duration={1000} style={linkStyle}>Home</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={1000} style={linkStyle}>About</Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={1000} style={linkStyle}>Skills</Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={1000} style={linkStyle}>Services</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={1000} style={linkStyle}>Contact</Link>
            </li>
            <div className="cancel-btn">
              <i className="fas fa-times"></i>
            </div>
          </ul>
          
        </div>
        <div className="menu-btn">
          <i className="fas fa-bars"></i>
        </div>
      </nav>
      <section className="home" id="home">
        <div className="home-content">
          <div className="text">
            <div className="text-one">I'm</div>
            <div className="text-two"> Muhammad Haris</div>
            <div className="text-three">Web Designer From Pakistan</div>
            <div className="text-five">Design isn't just my work; it's my passion. With a focus on web development using React.js, I merge functionality with a keen aesthetic sense.</div>
          </div>
          <div className="button">
            <a href="mailto:itsmalikharis@gmail.com"><button>Hire Me</button></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
