import React, { useEffect, useState } from 'react';

const Reloj = () => {
  const [fechaHora, setFechaHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFechaHora(new Date());
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  const formatearFecha = (fecha) => {
    return fecha.toLocaleDateString('es-CL', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatearHora = (fecha) => {
    return fecha.toLocaleTimeString('es-CL',{ hour12: false });
  };

  return (
    <div style={{
      color: 'white',
      fontWeight: 'bold',
      fontSize: '14px',
      textAlign: 'left'
    }}>
      Fecha de hoy: {formatearFecha(fechaHora)}. Hora: {formatearHora(fechaHora)}
    </div>
  );
};

export default Reloj;
