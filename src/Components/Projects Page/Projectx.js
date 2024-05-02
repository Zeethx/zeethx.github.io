import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectLight.css";
import "./Projectx.css";
import { useMediaQuery } from "react-responsive";

function Projectx({ id }) {
  return (
    <article id={id} className="projectx dark">
      <h2 className="projectx-header"><span>More Projects</span></h2>
      <div className="projectx__main">
        <div className="projectx__container">
            <a href="https://github.com/Zeethx/NLP-Project" className="projectx__link">
                <img
                className="projectx__image project__specialMobileImage"
                src="/images/discord_smartbot.png"
                srcset="/images/discord_smartbot.png 750w, /images/discord_smartbot.png 1468w"
                alt="Discordbot Project"
                width="30%"
                height="auto"
                loading="lazy"
                />
                <div class="hover-text">Discord SmartBot</div>
            </a>
        </div>
        <div className="projectx__container">
            <a href="https://github.com/Zeethx/NLP-Project" className="projectx__link">
                <img
                className="projectx__image project__specialMobileImage"
                src="/images/directory_encryption.png"
                srcset="/images/directory_encryption.png 750w, /images/directory_encryption.png 1468w"
                alt="Directory Encryption Project"
                width="30%"
                height="auto"
                loading="lazy"
                />
                <div class="hover-text">Directory Encryption</div>
            </a>
        </div>
        <div className="projectx__container">
            <a href="https://github.com/Zeethx/Github-Topics" className="projectx__link">
                <img
                className="projectx__image project__specialMobileImage"
                src="/images/github-topics.png"
                srcset="/images/github-topics.png 750w, /images/github-topics.png 1468w"
                alt="Directory Encryption Project"
                width="30%"
                height="auto"
                loading="lazy"
                />
                <div class="hover-text">Github Topics</div>
            </a>
        </div>


      </div>
      <LightWave />
    </article>
  );
}

export default Projectx;
