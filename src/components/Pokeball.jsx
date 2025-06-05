import React from 'react';
import { useNavigate } from 'react-router-dom';
import pokeball from '../assets/pokeball.png'

const Pokeball = () => {
  const navigate = useNavigate()
  const manejarClick = () => {
    navigate('/contactos');
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