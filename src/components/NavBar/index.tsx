import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import headerStart from "../../assets/icons/start.svg";
import headerDocsAdd from "../../assets/icons/docs_add.svg";
import headerSatelite from "../../assets/icons/satelite.svg";
import headerList from "../../assets/icons/list.svg";
import headerSearch from "../../assets/icons/search.svg";
import headerTimeLine from "../../assets/icons/timeline.svg";
import "./NavBar.scss";

interface NavBarProps {
  isOpen: boolean;
  onNavigate: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isOpen, onNavigate }) => {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        onNavigate();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside, { capture: true });
    }
    return () => {
      document.removeEventListener("click", handleClickOutside, { capture: true });
    };
  }, [isOpen, onNavigate]);

  return (
    <nav
      ref={navRef}
      className={`header__nav ${isOpen ? "is-open" : ""}`}
      aria-label="Menú principal"
    >
      <NavLink to="/" end className="header__nav-link" onClick={onNavigate}>
        <img
          className="header__nav-link--img"
          src={headerStart}
          alt=""
          aria-hidden="true"
        />
        Inicio
      </NavLink>

      <NavLink to="/register" className="header__nav-link" onClick={onNavigate}>
        <img
          className="header__nav-link--img"
          src={headerDocsAdd}
          alt=""
          aria-hidden="true"
        />
        Registro de Guías
      </NavLink>

      <NavLink to="/status" className="header__nav-link" onClick={onNavigate}>
        <img
          className="header__nav-link--img"
          src={headerSatelite}
          alt=""
          aria-hidden="true"
        />
        Estado General
      </NavLink>

      <NavLink to="/list" className="header__nav-link" onClick={onNavigate}>
        <img
          className="header__nav-link--img"
          src={headerList}
          alt=""
          aria-hidden="true"
        />
        Lista de Guías
      </NavLink>

      <NavLink to="/search" className="header__nav-link" onClick={onNavigate}>
        <img
          className="header__nav-link--img"
          src={headerSearch}
          alt=""
          aria-hidden="true"
        />
        Buscar Guías
      </NavLink>

      <NavLink to="/historical" className="header__nav-link" onClick={onNavigate}>
        <img
          className="header__nav-link--img"
          src={headerTimeLine}
          alt=""
          aria-hidden="true"
        />
        Historial de Guías
      </NavLink>
    </nav>
  );
};

export default NavBar;
