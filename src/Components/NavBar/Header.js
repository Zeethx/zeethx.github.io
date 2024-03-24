import "./Header.css";
import { useState } from "react";
import Nav from "./Nav";
import MenuIcon from "./MenuIcon";
import HeaderText from "./HeaderText";

function Header() {
  const [clicked, setClicked] = useState(false);

  return (
    <header className="header">
      <HeaderText clicked={clicked} setClicked={setClicked} />
      <div className="header__menuIcon">
        <MenuIcon clicked={clicked} setClicked={setClicked} />
      </div>
      <Nav setClicked={setClicked} clicked={clicked} />
    </header>
  );
}

export default Header;
