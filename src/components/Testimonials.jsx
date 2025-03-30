// src/components/Testimonials.jsx
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Desde que entreno en Janos Gym, mi energía ha mejorado y he logrado mis objetivos de fitness.",
      author: "Carlos G.",
      rating: 5,
    },

    {
      text: "Los entrenadores están altamete calificados y el ambiente es increíble. ¡Muy recomendado!",
      author: "Ana R.",
      rating: 5,
    },

    {
      text: "Janos Gym es el mejor gimnasio al que he asistido, con rutinas efectivas y motivación constante",
      author: "Luis M.",
      rating: 5,
    },
    // Agrega más testimonios aquí
  ];

  // Función para generar estrellas
  const renderStars = (rating) => {
    return "★"
      .repeat(rating)
      .split("")
      .map((star, i) => (
        <span key={i} className="star">
          {star}
        </span>
      ));
  };

  return (
    <section className="testimonials" id="testimonials">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <p>{testimonial.text}</p>
            <strong>- {testimonial.author}</strong>
            <div className="rating">{renderStars(testimonial.rating)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
