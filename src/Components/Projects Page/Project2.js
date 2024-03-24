import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">
            Directory Encryption
          </h3>
          <p className="project__description project__body">
          Directory Encryption is a simple python script that 
          allows you to encrypt and decrypt directories using 
          the Advanced Encryption Standard (AES) algorithm. 
          It is designed to be easy to use and flexible, 
          allowing you to encrypt multiple files in multiple 
          directories fast.
          </p>
          <p className="project__tech project__body">
            &gt; python · crypto · pyYAML · encrypt-python
          </p>
          <a
            className="project__sourceCodeDark"
            href="https://github.com/Zeethx/Directory-Encryption"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
        <img
          className="project__image project__imageDark"
          src="/images/covid_bot_project_image_large.jpg"
          srcset="/images/covid_bot_project_image_small.jpg 750w, /images/covid_bot_project_image_large.jpg 1468w"
          sizes="50vw"
          alt="Covid Bot Project Commands"
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
