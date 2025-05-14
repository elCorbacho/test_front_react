import React, { useEffect, useState } from 'react';
import modalImage from '../../assets/modal1.png'; // Asegúrate de que la ruta sea correcta
import './IntroModal.css';

const IntroModal = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleClose = () => {
    setFadeOut(true); // activa animación de salida
    setTimeout(() => setVisible(false), 300); // espera la transición
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className={`intro-modal-overlay ${fadeOut ? 'fade-out' : 'fade-in'}`}>
      <div className="intro-modal-content">
        <button className="intro-modal-close" onClick={handleClose}>
          &times;
        </button>
        <img src={modalImage} alt="Promoción" className="intro-modal-img" />
      </div>
    </div>
  );
};

export default IntroModal;