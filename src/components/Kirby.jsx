import React from 'react';
import { useNavigate } from 'react-router-dom';
import kirby from '../assets/kirby.png'

const Kirby = () => {
  const navigate = useNavigate()
  const manejarClick = () => {
    navigate('/habilidades')
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