import React from 'react';

const FondoConBlur = ({ imagenFondo, blur }) => {
  const estiloFondo = {
    backgroundImage: `url(${imagenFondo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -2,
  };

  const estiloOverlayBlur = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, 
    backdropFilter: `blur(${blur || '5px'})`,
    WebkitBackdropFilter: `blur(${blur || '5px'})`, 
  };

  return (
    <div style={estiloFondo}>
      <div style={estiloOverlayBlur}></div>
    </div>
  );
};

export default FondoConBlur;