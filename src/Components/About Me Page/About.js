import LightWave from "../Waves/LightWave";
import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about">
      <div data-aos="fade-right" className="about__text">
        <h2 className="about__heading">About Me<span className="dot">.</span></h2>
        <p className="about__body">
          👋 Hello My name is Raghav Anand and I am a Computer Science Honours - Artificial Intellence Graduate from the{" "}
          <span className="about__specialText">University of Windsor</span>.
          <br />
          <br />
          🏢 I have previously interned at{" "}
          <span className="about__specialText">Tech Mahindra</span> in the summer of '23, and
          at SuperBlanks the previous
          summer. With roles as a <span className="about_specialText">Machine Learning Intern</span> and a Fullstack Developer
          respectively. <br />
          <br /> 💥Currently, I am learning about{" "}
          <span className="about__specialText">OPENAI APIs</span>,{" "}
          <span className="about__specialText">Deep Learning Algorithms</span>, and reseraching about{" "}
          <span className="about__specialText">Music Recommender Systems</span>.
        </p>
        <br />
        <p className="about__body">
          You can reach out to me on my{" "}
          <NavHashLink className="about__specialText" smooth to="#contact">
            contact
          </NavHashLink>{" "}
          page
        </p>
      </div>
      <img
        className="about__headshot"
        src="/images/pfp_website.jpg"
        alt="Profile Picture"
        width="300"
        height="300"
      />
      <LightWave />
    </section>
  );
}

export default About;
