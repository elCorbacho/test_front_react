import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Home() {
  return (
    <section id="home" className="bg-light py-5 text-center">
      <Container>
        <h1>Hola, soy Andrés</h1>
        <p className="lead">Tecnólogo Médico e Ingeniero en Informática</p>
        <Button variant="primary" href="#contact">Contáctame</Button>
      </Container>
    </section>
  );
}

export default Home;