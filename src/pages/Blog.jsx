import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Blog() {
  return (
    <section id="blog" className="bg-light py-5 text-center">
      <Container>
        <h1>Blog</h1>
        <p className="lead">Bienvenido a mi blog</p>
        <Button variant="primary" href="#contact">Contáctame</Button>
      </Container>
    </section>
  );
}

export default Blog;