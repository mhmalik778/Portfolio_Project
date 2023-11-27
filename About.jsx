import React from 'react';


const About = () => {
  return (
    <section className="about" id="about">
      <div className="content">
        <div className="title"><span>About Me</span></div>
        <div className="about-details">
          <div className="left">
            <img src="https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?b=1&s=612x612&w=0&k=20&c=-wTGItN4uscm4sy8X07O4YXhyl2xOBnc9DfzMyUKxJ0=" alt="" />
          </div>
          <div className="right">
            <div className="topic">Designing Is My Passion</div>
            <p>
            Design isn't just my work; it's my passion. With a focus on web development using WordPress and React.js, I merge functionality with a keen aesthetic sense. Every project is an opportunity to weave creativity into code, creating visually stunning and seamlessly functional websites. Design is not just what I do—it's who I am.
            In the realm of web development, my passion for design extends beyond the lines of code. Whether it's crafting a pixel-perfect layout in WordPress or building dynamic interfaces with React.js, I thrive on transforming ideas into visually compelling and technically sound digital landscapes. Let's collaborate to bring creativity and functionality together, ensuring your online presence is not just a representation but a memorable experience.
            </p>
            <div className="button">
              <button>Download CV</button>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    
  );
}

export default About;
