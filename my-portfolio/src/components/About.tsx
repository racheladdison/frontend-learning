import React from "react";
import "./About.css";
import "./General.css";
import reactPic from "../assets/react.svg";

const About: React.FC = () => {
  return (
    <section id="about" className="component">
      <div className="about-content">
        <div className="about-text">
            <h2>About Me</h2>
            <p>
            Hello! I'm a passionate web developer with a love for creating
            interactive and user-friendly applications. I specialize in React and
            have experience in building responsive designs.
            </p>
        </div>
        <div className="about-image">
            <img src={reactPic} alt="React" className="react-pic" />
        </div>
      </div>
    </section>
  );
};

export default About;