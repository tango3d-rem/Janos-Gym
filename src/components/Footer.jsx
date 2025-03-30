// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Sección de Contacto */}
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Av. Fitnes 1234</p>
          <p>contacto@janosgym.com</p>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <div className="social-icons">
            <a
              href="https://instagram.com/tu_gym"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://tiktok.com/@tu_gym"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok className="social-icon" />
            </a>
            <a
              href="https://youtube.com/tu_gym"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="social-icon" />
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>
            © {new Date().getFullYear()} Jano´s Gym. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
