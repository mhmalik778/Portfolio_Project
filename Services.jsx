import React from 'react';
import { FaDesktop, FaPaintBrush, FaChartLine, FaAndroid, FaCameraRetro, FaTabletAlt } from 'react-icons/fa';

const Services = () => {
  return (
    <>
      <section className="services" id="services">
        <div className="content">
          <div className="title"><span>My Services</span></div>
          <div className="boxes">
            <div className="box">
              <div className="icon">
                <FaDesktop />
              </div>
              <div className="topic">Web Development</div>
              <p>Passionate about crafting seamless digital experiences, I specialize in web development using both WordPress and React.js.</p>
            </div>
            <div className="box">
              <div className="icon">
                <FaPaintBrush />
              </div>
              <div className="topic">Graphic Design</div>
              <p>As a versatile web developer with a keen eye for design, I not only code but also bring visual aesthetics to life.</p>
            </div>
            <div className="box">
              <div className="icon">
                <FaChartLine />
              </div>
              <div className="topic">Digital Marketing</div>
              <p>Let's not just build a site, but create an online strategy that drives traffic, engages users, and boosts your brand. </p>
            </div>
            <div className="box">
              <div className="icon">
                <FaAndroid />
              </div>
              <div className="topic">Icon Design</div>
              <p>In addition to my web development skills in WordPress and React.js, I excel in crafting custom icon designs. </p>
            </div>
            <div className="box">
              <div className="icon">
                <FaCameraRetro />
              </div>
              <div className="topic">Photography</div>
              <p>Beyond code, I capture moments visually. As a web developer adept in WordPress and React.js, I merge technical prowess with a creative eye for photography. </p>
            </div>
            <div className="box">
              <div className="icon">
                <FaTabletAlt />
              </div>
              <div className="topic">SEO</div>
              <p>Unlock the full potential of your website with my SEO expertise. Specializing in WordPress and React.js,</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="content">
          <div className="title"><span>Contact Me</span></div>
          <div className="text">
            <div className="topic">Have Any Project?</div>
            <p>Elevate your online presence with my expertise in WordPress and React.js. Let's collaborate to create a website that not only meets but exceeds your expectations. Ready to start your project?</p>
            <div className="button">
              <a href="https://www.linkedin.com/in/muhammad-haris-malik-3b75b8216/"><button>Let's Chat</button></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



export default Services;