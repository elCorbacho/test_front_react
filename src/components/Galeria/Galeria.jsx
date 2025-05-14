import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
//import './Galeria.css'; // Crea este archivo si necesitas estilos específicos

const Galeria = () => {
  return (
    <section className="galeria py-5">
      <Container fluid>
        <h2 className="text-center mb-4 display-5 fw-bold text-white fondo">Galería de Imágenes</h2>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block carousel-img" src="./1.jpg" alt="Imagen 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block carousel-img" src="./2.jpg" alt="Imagen 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block carousel-img" src="./3.png" alt="Imagen 3" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block carousel-img" src="./4.jpg" alt="Imagen 4" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block carousel-img" src="./5.jpg" alt="Imagen 5" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block carousel-img" src="./6.jpg" alt="Imagen 6" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block carousel-img" src="./7.jpg" alt="Imagen 7" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block carousel-img" src="./8.jpg" alt="Imagen 8" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block carousel-img" src="./9.jpg" alt="Imagen 9" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default Galeria;
