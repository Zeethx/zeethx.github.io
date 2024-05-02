import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";
import { useMediaQuery } from "react-responsive";

function Project1({ id }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article id={id} className="project light">
      <h2 className="project__header"><span>Projects</span></h2>
      <div className="project__main">
        <img
          className="project__image project__specialMobileImage"
          src="/images/concertbeat.png"
          srcset="/images/concertbeat.png 750w, /images/concertbeat.png 1468w"
          alt="ConcertBeat"
          width="50%"
          height="auto"
          loading="lazy"
        />

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">ConcertBeat</h3>
          <p className="project__description project__body">
          The project "ConcertBeat" is designed to keep users updated
          on concerts near them based on their Spotify listening history.
           It utilizes both the Spotify API and the Ticketmaster API to 
           deliver these personalized concert notifications. 
           The application serves as a bridge between users' music 
           preferences and live events that align with their tastes.
          </p>
          <p className="project__tech project__body">
            &gt; Assistants API · Python · Streamlit · OPENAI API ·
            News API
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/Zeethx/News-Summarizer"
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

export default Project1;
