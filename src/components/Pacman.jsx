import React from 'react';
import pacman from '../assets/pacman.png'

const Pacman = () => {
  const manejarClick = () => {
    console.log('si funciona');
  };

  return (
    <img
      src={pacman}
      alt="Pacman pixelado"
      style={{ width: 160, height: 160, cursor: 'pointer', imageRendering: 'pixelated' }}
      onClick={manejarClick}
    />
  );
};

export default Pacman;