import LightWave from "../Waves/LightWave";
import "./Contact.css";
import { FaLinkedin, FaMailBulk } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div data-aos="fade-right" className="contact__body">
        <h2 className="contact__heading"><span>Contact Me</span></h2>
        <div className="contact__option">
          <FaMailBulk className="contact__logo" size={45} />
          <a className="linktosite" href="mailto: raghavanand1869@gmail.com">
            <span className="contact__text">raghavanand1869@gmail.com</span>
          </a>
        </div>
        <div className="contact__option">
          <FaLinkedin className="contact__logo" size={45} />
          <a
            href="https://www.linkedin.com/in/raghav-anand-zeethx/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="my Linkedin"
            className="linktosite"
          >
            <span className="contact__text">Raghav Anand</span>
          </a>
        </div>
      </div>
      <LightWave />
    </section>
  );
}

export default Contact;
