// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <a href="/">JANO´S GYM</a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#productos">Productos</a>
          </li>
          <li>
            <a href="#coaching">Coaching</a>
          </li>
          <li>
            <Link to="#registrarse" className="cta-button">
              Registrarse
            </Link>
          </li>
          <li>
            <Link to="#ingresar">Ingresar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
