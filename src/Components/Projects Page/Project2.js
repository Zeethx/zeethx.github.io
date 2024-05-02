import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">
            Spacelog
          </h3>
          <p className="project__description project__body">
          Spacelog is a sophisticated blogging platform for 
          astronomy enthusiasts built in React, leveraging backend 
          as a service(Appwrite) for secure data storage and user management.
          Designed a responsive user interface using Tailwind CSS, 
          focusing on mobile-first principles to improve 
          accessibility and user satisfaction 
          </p>
          <p className="project__tech project__body">
            &gt; python · crypto · pyYAML · encrypt-python
          </p>
          <a
            className="project__sourceCodeDark"
            href="https://github.com/Zeethx/Spacelog"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"srcset="/images/spacelog_planet.png 750w, /images/spacelog_planet.png 1468w"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
        <img
          className="project__image project__imageDark"
          src="/images/spacelog_planet.png"
          
          sizes="50vw"
          alt="Directory Encryption Project"
          width="50%"
          height="auto"
          loading="lazy"
        />
      </div>
      <LightWave />
    </article>
  );
}

export default Project2;
