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
          src="/images/news_summarizer.png"
          srcset="/images/news_summarizer.png 750w, /images/news_summarizer.png 1468w"
          alt="News Summarizer Project"
          width="50%"
          height="auto"
          loading="lazy"
        />

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">News Summarizer</h3>
          <p className="project__description project__body">
          This project is a News Summarizer that leverages OpenAI's 
          GPT models to provide concise summaries of news articles 
          based on user-specified topics. It integrates with the 
          NewsAPI to fetch relevant articles and uses Streamlit 
          for an interactive user interface.
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
