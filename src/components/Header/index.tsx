import React from "react";
import NavBar from "../NavBar/index";
import headerLogo from "../../assets/img/logo.png";
import headerMenu from "../../assets/icons/menu.svg";
import "./Header.scss";
import "../../assets/styles/base.scss";

import { useToggle } from "../../hooks/useToggle";

const Header = () => {
  const { isOpen, toggle, close } = useToggle(false);

  return (
    <header className="header">
      <img className="header__img" src={headerLogo} alt="" />
      <img className="header__img-menu" src={headerMenu} onClick={toggle} alt="" />
      <NavBar isOpen={isOpen} onNavigate={close}></NavBar>
    </header>
  );
};

export default Header;


