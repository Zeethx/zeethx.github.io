import "./PurpleArrows.css";
import { NavHashLink } from "react-router-hash-link";

function PurpleArrows() {
  return (
    <NavHashLink
      className="purpleArrows"
      to="/#about"
      scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}
    >
      <img
        className="purpleArrows"
        src="/images/bottom_yellow_arrows.svg"
        alt="bottom yellow arrows"
      />
    </NavHashLink>
  );
}

export default PurpleArrows;
