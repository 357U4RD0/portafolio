import React from 'react';
import FondoConBlur from '../components/FondoconBlur';
import MapaPacman from '../assets/MapaPacman.webp';
import '../styles/Proyecto.css';
import ECommerce from '../assets/ECommerce.png';
import Animes from '../assets/Animes.png';
import BarraSuperior from '../components/BarraSuperior';

const Proyecto = () => {
  return (
    <>
    <BarraSuperior />
    <div className="proyecto-fondo">
      <FondoConBlur imagenFondo={MapaPacman} blur="8px" />
      <a href="./" className="proyecto-home-btn">Home</a>

      <h1 className="proyecto-titulo">Mis Proyectos</h1>
      <div className="proyecto-cards">

        <div className="proyecto-card">
          <img src={ECommerce} alt="ECommerce" />
          <a href="https://e-commerce-vert-one-69.vercel.app/" className="proyecto-link">ECommerce</a>
          <p>ECommerce con ambientación en la venta de videojuegos que posee una vista detalles y una vista carrito.</p>
          <p><strong>Tecnologías usadas:</strong> Js, Jsx, CSS, React Vite, React Router, HTML</p>
        </div>

        <div className="proyecto-card">
          <img src="https://via.placeholder.com/300x200.png?text=Incidentes" alt="Incidentes" />
          <a href="#" className="proyecto-link">Incidentes</a>
          <p>Página para crear, modificar, eliminar o alterar el estado de algún incidente.</p>
          <p><strong>Tecnologías usadas:</strong> APIs, Js, CSS, HTML</p>
        </div>

        <div className="proyecto-card">
          <img src={Animes} alt="Tu Proyecto" />
          <a href="http://awita.site/usuarios/cas23890/useMemo/" className="proyecto-link">Buscador Animes</a>
          <p>Página con filtrado de búsqueda guardados y agregado de animes con sus descripciones</p>
          <p><strong>Tecnologías usadas:</strong> Hook useMemo de React, Js, CSS, HTML</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Proyecto;