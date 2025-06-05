import React from 'react';
import pokeball from '../assets/pokeball.png'

const Pokeball = () => {
  const manejarClick = () => {
    console.log('si funciona | Pokeball');
  };

  return (
    <img
      src={pokeball}
      alt="Pokeball pixelada"
      style={{ width: 160, height: 160, cursor: 'pointer', imageRendering: 'pixelated' }}
      onClick={manejarClick}
    />
  );
};

export default Pokeball;