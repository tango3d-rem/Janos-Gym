// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/assets/videos/flexiones.mp4" type="video/mp4" />
          <img src="/images/hero-fallback.jpg" alt="Entrenamiento de fuerza" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="hero-content">
        <h1>Transforma tu físico con entrenamiento funcional</h1>
        <p>
          Clases grupales | Entrenadores certificados | Resultados garantizados
        </p>
        <a href="https://wa.me/1170161112" className="cta-button">
          ¡CONTRATAR!
        </a>
      </div>
    </section>
  );
};

export default Hero;
