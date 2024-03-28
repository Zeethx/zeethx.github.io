import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project3() {
  return (
    <article className="project light">
      <div className="project__main">
        <img
          className="project__image"
          src="/images/discord_smartbot.png"
          srcset="/images/discord_smartbot.png 750w, /images/discord_smartbot.png 1468w"
          sizes="50vw"
          alt="Discord Smartbot Project"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Discord Smartbot</h3>
          <p className="project__description project__body">
          The project is an AI Chatbot developed for the AI Club,
           designed to create a grocery list through speech 
           recognition. It employs technologies in natural 
           language processing, machine learning, and speech 
           recognition to interpret user commands and generate 
           the desired output. This project is implemented in 
           Python and is focused on enhancing the user's 
           convenience in compiling grocery lists via voice 
           commands.
          </p>
          <p className="project__tech project__body">
            &gt; python · Discord API · NLP · TensorFlow
             · Speech Recognition
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/Zeethx/NLP-Project"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project3;
