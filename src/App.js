// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Products from "./components/Products";
import Coaching from "./components/Coaching";
import Footer from "./components/Footer";
import "./assets/css/styles.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Activities />
      <Testimonials />
      <Services />
      <Products />
      <Coaching />
      <Footer />
    </div>
  );
}

export default App;