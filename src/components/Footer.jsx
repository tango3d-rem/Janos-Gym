// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Sección de Contacto */}
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Jose Marti 1791, Carlos Spegazzini, Bs. As.</p>
          <p>contacto@janosgym.com</p>
          <a
              href="https://wa.me/1170161112"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="social-icon" />
            </a>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <div className="social-icons">
            <a
              href="https://instagram.com/janos_gym"
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
              href="https://www.youtube.com/@Martin_Amarilla"
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
