import React from 'react';
import { useNavigate } from 'react-router-dom';
import pacman from '../assets/pacman.png'

const Pacman = () => {
  const navigate = useNavigate()
  const manejarClick = () => {
    navigate('/proyectos');
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