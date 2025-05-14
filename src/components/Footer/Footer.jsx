import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-4">
              <img 
                src="/logo_cholchol.png" 
                alt="Logo Municipalidad de Cholchol" 
                height="50" 
                className="me-2"
              />
              <div>
                <h5 className="mb-1 text-white fw-bold">Municipalidad de Cholchol</h5>
                <p className="mb-0 text-white-50 small">Región de La Araucanía, Chile</p>
              </div>
            </div>
            <p className="text-white-50">
              La Municipalidad de Cholchol está comprometida con el desarrollo y bienestar de todos los habitantes de nuestra comuna.
            </p>
            <div className="mt-4">
              <h6 className="text-white mb-3">Síguenos en:</h6>
              <div className="d-flex gap-2">
                <a href="#" className="btn btn-sm btn-outline-light rounded-circle" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="btn btn-sm btn-outline-light rounded-circle" aria-label="Twitter">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" className="btn btn-sm btn-outline-light rounded-circle" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="btn btn-sm btn-outline-light rounded-circle" aria-label="YouTube">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-4">Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">Inicio</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">La Comuna</a>
              </li>
              <li className="mb-2">
                <a href="#servicios" className="text-white-50 text-decoration-none">Servicios</a>
              </li>
              <li className="mb-2">
                <a href="#noticias" className="text-white-50 text-decoration-none">Noticias</a>
              </li>
              <li className="mb-2">
                <a href="#contacto" className="text-white-50 text-decoration-none">Contacto</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Servicios Principales</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">Trámites Municipales</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">Programas Sociales</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">Turismo</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">Salud Municipal</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">Transparencia</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h5 className="text-white mb-4">Contacto</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <div className="d-flex">
                  <i className="bi bi-geo-alt text-white-50 me-2"></i>
                  <span className="text-white-50">Avenida Luis Durand 760, Cholchol, La Araucanía</span>
                </div>
              </li>
              <li className="mb-3">
                <div className="d-flex">
                  <i className="bi bi-telephone text-white-50 me-2"></i>
                  <a href="tel:+56452658658" className="text-white-50 text-decoration-none">+56 45 265 8658</a>
                </div>
              </li>
              <li className="mb-3">
                <div className="d-flex">
                  <i className="bi bi-envelope text-white-50 me-2"></i>
                  <a href="mailto:contacto@municholchol.cl" className="text-white-50 text-decoration-none">contacto@municholchol.cl</a>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <i className="bi bi-clock text-white-50 me-2"></i>
                  <span className="text-white-50">Lunes a Viernes: 8:30 - 14:00 hrs</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-5 mb-4 border-secondary" />

        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-white-50">© {currentYear} Municipalidad de Cholchol. Todos los derechos reservados.</p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#" className="text-white-50 text-decoration-none small">Política de Privacidad</a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="#" className="text-white-50 text-decoration-none small">Términos de Uso</a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="#" className="text-white-50 text-decoration-none small">Mapa del Sitio</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
