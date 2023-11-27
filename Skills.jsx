import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="content">
        <div className="title"><span>My Skills</span></div>
        <div className="skills-details">
          <div className="text">
            <div className="topic">Skills Reflects Our Knowledge</div>
            <p>In the realm of web development, my skills in WordPress and React.js serve as a reflection of my deep knowledge and proficiency. Each line of code and every design element is a testament to my commitment to delivering exceptional digital experiences. Let's turn ideas into innovation and bring your vision to life</p>
            <div className="experience">
              <div className="num">2</div>
              <div className="exp">
                Years Of <br/>
                Experience
              </div>
            </div>
          </div>
          <div className="boxes">
            <div className="box">
              <div className="topic">HTML</div>
              <div className="per">90%</div>
            </div>
            <div className="box">
              <div className="topic">CSS</div>
              <div className="per">80%</div>
            </div>
            <div className="box">
              <div className="topic">JavaScript</div>
              <div className="per">80%</div>
            </div>
            <div className="box">
              <div className="topic">WordPress</div>
              <div className="per">90%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
