import React from 'react';

const SaludSection = () => {
  return (
    <section id="salud" className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Salud</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Columna de imágenes */}
        <div className="flex flex-col items-center gap-4">
          <img src="/imagenes/salud1.jpg" alt="Salud 1" className="rounded-lg shadow-md w-full" />
          <img src="/imagenes/salud2.jpg" alt="Salud 2" className="rounded-lg shadow-md w-full" />
        </div>

        {/* Columna de texto */}
        <div>
          <p className="text-lg text-gray-700 mb-4">
            La salud es un pilar fundamental para el desarrollo de nuestra comunidad. Nos enfocamos en mejorar el acceso a servicios médicos, promover hábitos saludables y garantizar el bienestar de todos los vecinos.
          </p>
          <p className="text-lg text-gray-700">
            Con nuevas iniciativas, trabajaremos para reforzar los centros de atención primaria, implementar programas de prevención y acercar especialistas a quienes más lo necesitan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SaludSection;