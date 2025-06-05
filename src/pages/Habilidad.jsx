import React from 'react';
import FondoConBlur from '../components/FondoconBlur';
import Green from '../assets/Green.webp'; 

const Habilidad = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', zIndex: 1 }}>
      <FondoConBlur imagenFondo={Green} blur="8px" />
      <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '50px' }}>
        Página de Habillidad
      </h1>
    </div>
  );
};

export default Habilidad;