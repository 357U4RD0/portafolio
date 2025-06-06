import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BarraSuperior.css';

const BarraSuperior = () => (
  <nav className="barra-superior">
    <Link to="/proyectos">Proyectos</Link>
    <Link to="/habilidades">Habilidades</Link>
    <Link to="/contactos">Contacto</Link>
  </nav>
);

export default BarraSuperior;