import React from 'react';
import FondoConBlur from '../components/FondoconBlur';
import Kanto from '../assets/Kanto.png'; 

const Contacto = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', zIndex: 1 }}>
      <FondoConBlur imagenFondo={Kanto} blur="8px" />
      <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '50px' }}>
        Página de Contactos
      </h1>
    </div>
  );
};

export default Contacto;