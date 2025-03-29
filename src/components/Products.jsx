// src/components/Products.jsx
import React from "react";
import proteina from "../assets/images/proteina.jpg";
import guantes from "../assets/images/guantes.jpg";

const Products = () => {
  return (
    <section className="featured-products" id="productos">
      <h2>Productos Destacados</h2>
      <div className="product-grid">
        <div className="product-card">
          <img src={proteina} alt="Proteína en polvo" />
          <h4>Proteína Premium</h4>
          <p className="price">$49.99</p>
          <button className="buy-button">Agregar al carrito</button>
        </div>
        <div className="product-card">
          <img src={guantes} alt="Guantes de entrenamiento" />
          <h4>Guantes Profesionales</h4>
          <p className="price">$29.99</p>
          <button className="buy-button">Agregar al carrito</button>
        </div>
      </div>
    </section>
  );
};

export default Products;