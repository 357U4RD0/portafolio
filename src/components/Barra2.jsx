import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Barra2.css';

const Barra2 = () => (
  <nav className="barra2">
    <Link to="/proyectos">Proyectos</Link>
    <Link to="/habilidades">Habilidades</Link>
    <Link to="/contactos">Contacto</Link>
  </nav>
);

export default Barra2;