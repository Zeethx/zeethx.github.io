import PurpleArrows from "../LandingPage/PurpleArrows";
import DarkWave from "../Waves/DarkWave";
import "./Landing.css";
import LeftSocialMediaIcons from "./LeftSocialMediaIcons";
import TypingAnimation from "./TypingAnimation";

function Landing() {
  return (
    <section id="landing" className="landing">
      <div className="landing__topText">
        <h1 className="landing__mainText landing__name">Raghav Anand</h1>
        <div className="typing__animation">
          <TypingAnimation />
        </div>
      </div>
      <hr className="landing__hr" />

      <div className="landing__bottomText">
        <h1 className="landing__mainText">Computer Science</h1>
        <h1 className="landing__mainText">Graduate</h1>
      </div>
      <PurpleArrows />

      <LeftSocialMediaIcons />

      <DarkWave />
    </section>
  );
}

export default Landing;
