import React, { useState } from 'react';
import './QuickLinks.css'; // Assuming you have a CSS file for styles

// Note: No need to import bootstrap-icons CSS here as it's already imported in Index.tsx

const QuickLinks = () => {
  const [activeLink, setActiveLink] = useState(null);
  
  const quickLinks = [
    {
      id: 1,
      title: "Pago de Permisos",
      icon: "bi bi-wallet2",
      color: "#3ead5a",
      url: "#"
    },
    {
      id: 2,
      title: "Permisos de Circulación",
      icon: "bi bi-car-front",
      color: "#194277",
      url: "#"
    },
    {
      id: 3,
      title: "Registro Social",
      icon: "bi bi-person-vcard",
      color: "#e9b949",
      url: "#"
    },
    {
      id: 4,
      title: "Oficina Virtual",
      icon: "bi bi-pc-display",
      color: "#d35400",
      url: "#"
    },
    {
      id: 5,
      title: "Transparencia",
      icon: "bi bi-file-earmark-ruled",
      color: "#0072ce",
      url: "#"
    },
    {
      id: 6,
      title: "Educación Municipal",
      icon: "bi bi-mortarboard",
      color: "#884ea0",
      url: "#"
    }
  ];

  const handleMouseEnter = (id) => {
    setActiveLink(id);
  };

  const handleMouseLeave = () => {
    setActiveLink(null);
  };

  return (
    <section className="py-5 bg-primary-custom" id="tramites">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-white fondo">Trámites en Línea</h2>
          <p className="lead fw-normal text-white fondo">Accede rápidamente a los servicios más utilizados</p>
        </div>

        <div className="row g-4 justify-content-center">
          {quickLinks.map((link) => (
            <div key={link.id} className="col-6 col-md-4 col-lg-2">
              <a 
                href={link.url}
                className="text-decoration-none"
                onClick={(e) => { e.preventDefault(); alert(`Accediendo a: ${link.title}`); }}
              >
                <div 
                  className="card-tramite card border-0 text-center h-100 shadow" id="card-tramite"
                  onMouseEnter={() => handleMouseEnter(link.id)}
                  onMouseLeave={handleMouseLeave}
                  style={{ 
                    transition: 'transform 0.3s ease',
                    transform: activeLink === link.id ? 'translateY(-10px)' : 'none'
                  }}
                >
                  <div className="card-body d-flex flex-column align-items-center justify-content-center p-3">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center mb-3" 
                      style={{ 
                        width: '60px', 
                        height: '60px', 
                        backgroundColor: link.color,
                        transition: 'transform 0.3s ease',
                        transform: activeLink === link.id ? 'scale(1.1)' : 'scale(1)'
                      }}
                    >
                      <i className={`${link.icon} fs-3 text-white`}></i>
                    </div>
                    <h6 className="mb-0 fw-semibold">{link.title}</h6>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;