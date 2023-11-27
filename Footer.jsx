import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FaPhoneVolume, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    localStorage.setItem('userEmail', email);

    setEmail('');
    setError('');
  };

  return (
    <footer>
      <div className="content">
        <div className="left box">
          <div className="upper">
            {/* Replace the "About Me" section with the logo */}
            <div className="logo11">ELITE WP</div>
          </div>
          <div className="lower">
            <div className="topic">Contact Me</div>
            <div className="phone">
              <a href="tel:+923485508310"><FaPhoneVolume />+923485508310</a>
            </div>
            <div className="email">
              <a href="mailto:itsmalikharis@gmail.com"><FaEnvelope />itsmalikharis@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="middle box">
          <div className="topic">ELITE WP</div>
          <ul className="footer-menu">
            <li>
              <ScrollLink to="home" smooth={true} duration={1000} style={{ cursor: 'pointer' }}>Home</ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} duration={1000} style={{ cursor: 'pointer' }}>About</ScrollLink>
            </li>
            <li>
              <ScrollLink to="skills" smooth={true} duration={1000} style={{ cursor: 'pointer' }}>Skills</ScrollLink>
            </li>
            <li>
              <ScrollLink to="services" smooth={true} duration={1000} style={{ cursor: 'pointer' }}>Services</ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={1000} style={{ cursor: 'pointer' }}>Contact</ScrollLink>
            </li>
          </ul>
        </div>
        <div className="right box">
          <div className="topic">Subscribe</div>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubscribe}>
            <input
              type="text"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="submit" value="Send" />
            <div className="media-icons">
              <a href="https://www.facebook.com/muhammadharismalik786"><FaFacebookF /></a>
              <a href="https://www.instagram.com/its_harismalik1/"><FaInstagram /></a>
              <a href="https://twitter.com/"><FaTwitter /></a>
              <a href="https://www.youtube.com/"><FaYoutube /></a>
              <a href="https://www.linkedin.com/in/muhammad-haris-malik-3b75b8216/"><FaLinkedinIn /></a>
            </div>
          </form>
        </div>
      </div>
      <div className="bottom"></div>
    </footer>
  );
};

export default Footer;
