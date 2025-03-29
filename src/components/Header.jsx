// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">JANO´S GYM</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="#home">Home</Link></li>
          <li><Link to="#productos">Productos</Link></li>
          <li><Link to="#coaching">Coaching</Link></li>
          <li><Link to="#registrarse" className="cta-button">Registrarse</Link></li>
          <li><Link to="#ingresar">Ingresar</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;