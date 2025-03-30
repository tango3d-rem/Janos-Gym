// src/components/Activities.jsx
import React from "react";

const Activities = () => {
  // Datos reutilizables (puedes moverlos a un archivo aparte)
  const activities = [
    { title: "Entrenamiento de Cardio", video: "/assets/videos/flexiones.mp4" },
    { title: "Levantamiento de Pesas", video: "/assets/videos/flexiones.mp4" },
    { title: "Clases de Yoga", video: "/assets/videos/flexiones.mp4" }
  ];

  return (
    <section className="activities" id="activities">
      <h2>Actividades en Janos Gym</h2>
      <div className="video-gallery">
        {activities.map((activity, index) => (
          <div className="video-item" key={index}>
            <video controls muted playsInline>
              <source src={activity.video} type="video/mp4" />
            </video>
            <p>{activity.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;