
import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  
  const services = [
    {
      id: 1,
      title: "Trámites Municipales",
      icon: "bi bi-file-earmark-text",
      description: "Accede a información sobre permisos, certificados y documentos municipales.",
      items: [
        "Permisos de edificación",
        "Patentes comerciales",
        "Licencias de conducir",
        "Certificados de residencia",
        "Permisos para eventos"
      ]
    },
    {
      id: 2,
      title: "Asistencia Social",
      icon: "bi bi-people",
      description: "Programas sociales y ayudas para personas y familias de la comuna.",
      items: [
        "Subsidios habitacionales",
        "Becas municipales",
        "Ayudas sociales",
        "Programas adulto mayor",
        "Subsidio único familiar"
      ]
    },
    {
      id: 3,
      title: "Desarrollo Comunitario",
      icon: "bi bi-house-heart",
      description: "Iniciativas para fortalecer organizaciones y el desarrollo local.",
      items: [
        "Fondos concursables",
        "Capacitaciones",
        "Apoyo a organizaciones",
        "Talleres comunitarios",
        "Emprendimiento local"
      ]
    },
    {
      id: 4,
      title: "Obras Municipales",
      icon: "bi bi-building",
      description: "Información sobre obras, infraestructura y servicios públicos.",
      items: [
        "Consultas sobre obras en ejecución",
        "Solicitudes de infraestructura",
        "Mantención de áreas verdes",
        "Alumbrado público",
        "Denuncias por daños"
      ]
    },
    {
      id: 5,
      title: "Salud Municipal",
      icon: "bi bi-heart-pulse",
      description: "Servicios de salud primaria y programas de atención comunal.",
      items: [
        "Consultas médicas",
        "Programas preventivos",
        "Vacunación",
        "Farmacia popular",
        "Atención domiciliaria"
      ]
    },
    {
      id: 6,
      title: "Educación Municipal",
      icon: "bi bi-book",
      description: "Información sobre establecimientos educacionales y programas.",
      items: [
        "Matrículas escolares",
        "Programas extracurriculares",
        "Beneficios estudiantiles",
        "Transporte escolar",
        "Actividades educativas"
      ]
    }
  ];

  const handleServiceClick = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section id="servicios">
      <div>
        <div>
          <h1 className="display-6 fw-bold text-white fondo">Servicios Municipales</h1>
          <h3 className="lead fw-normal text-white fondo">Conoce los servicios que ofrecemos a nuestra comunidad</h3>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-4">
              <div 
                className={`card h-100 service-card border-0 shadow-sm ${activeService === service.id ? 'border-primary' : ''}`}
                onClick={() => handleServiceClick(service.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-body text-center p-4">
                  <div 
                    className={`d-inline-flex align-items-center justify-content-center rounded-circle mb-4 ${activeService === service.id ? 'bg-primary-custom' : 'bg-primary-light'}`}
                    style={{ width: '80px', height: '80px', transition: 'background-color 0.3s ease' }}
                  >
                    <i className={`${service.icon} fs-1 text-white`}></i>
                  </div>
                  <h3 className="card-title h5 mb-3 fw-bold">{service.title}</h3>
                  <p className="card-text fw-normal mb-4">{service.description}</p>
                  
                  <div
                    className="service-details overflow-hidden"
                    style={{
                      maxHeight: activeService === service.id ? '200px' : '0',
                      opacity: activeService === service.id ? 1 : 0,
                      transition: 'max-height 0.5s ease, opacity 0.5s ease'
                    }}
                  >
                    <ul className="text-start mb-3">
                      {service.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(`Más información sobre: ${service.title}`);
                      }}
                    >
                      Más información
                    </button>
                  </div>
                  
                  <div
                    className="text-primary small fw-semibold mt-2"
                    style={{
                      opacity: activeService !== service.id ? 1 : 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    Click para más detalles
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;