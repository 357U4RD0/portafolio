import React from 'react';
import kirby from '../assets/kirby.png'

const Kirby = () => {
  const manejarClick = () => {
    console.log('si funciona | Kirby');
  };

  return (
    <img
      src={kirby}
      alt="Kirby pixelado"
      style={{ width: 160, height: 160, cursor: 'pointer', imageRendering: 'pixelated' }}
      onClick={manejarClick}
    />
  );
};

export default Kirby;