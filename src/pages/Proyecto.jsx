import React from 'react';
import FondoConBlur from '../components/FondoconBlur';
import MapaPacman from '../assets/MapaPacman.webp'; 

const Proyecto = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', zIndex: 1 }}>
      <FondoConBlur imagenFondo={MapaPacman} blur="8px" />
      <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '50px' }}>
        Página de Proyectos
      </h1>
    </div>
  );
};

export default Proyecto;