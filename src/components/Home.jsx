import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css';
import QuickLinks from './QuickLinks/QuickLinks';
import Services from './Services/Services';
import News from './News/News';
import Galeria from './Galeria/Galeria';



const Home = () => {
  return (
    <div className="home-container">
      <header className="text-center py-5">
        <h1 className="titulo-principal fw-bold">Bienvenidos a la Municipalidad de Chol-Chol</h1>
      </header>

      <section className="hero-section py-4">
        <Services />
      </section>

      <section className="noticias py-4">
        <News />
      </section>

      <section className="tramites py-4">
        <QuickLinks />
      </section>

      {/* Usar el nuevo componente Galeria */}
      <Galeria/>

    </div>
  );
};

export default Home;
