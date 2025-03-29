// src/components/Services.jsx
import React from "react";
import { FaDumbbell, FaTshirt, FaVideo } from "react-icons/fa";

const Services = () => {
  return (
    <section className="services">
      <div className="service-card">
        <FaDumbbell className="service-icon" />
        <h3>Entrenamiento Personal</h3>
        <p>Sesiones 1 a 1 con expertos certificados</p>
      </div>
      {/* Repite para otros servicios */}
    </section>
  );
};