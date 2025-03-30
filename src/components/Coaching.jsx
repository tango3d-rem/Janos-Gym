// src/components/Coaching.jsx
import React from "react";
import { FaCheck } from "react-icons/fa";

const Coaching = () => {
  const programs = [
    {
      title: "Plan Básico",
      price: "$99/mes",
      features: [
        "Rutinas semanales",
        "Seguimiento nutricional",
        "Acceso a comunidad"
      ]
    },
    // Agrega más planes aquí
  ];

  return (
    <section className="coaching" id="coaching">
      <h2>Programas de Coaching</h2>
      <div className="coaching-content">
        {programs.map((program, index) => (
          <div className="program-option" key={index}>
            <h3>{program.title}</h3>
            <ul>
              {program.features.map((feature, i) => (
                <li key={i}>
                  <FaCheck className="feature-icon" />
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#registrarse" className="cta-button">{program.price}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coaching;