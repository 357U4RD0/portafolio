import React from 'react';
import InstaIcon from '../assets/Insta.png';
import Kanto from '../assets/Kanto.png';
import { useNavigate } from 'react-router-dom';
import MiCV from '../assets/MiCV.pdf';
import '../styles/Contacto.css';

const Contacto = () => {
  const navigate = useNavigate();

  return (
    <div className="contacto-contenedor">
      <div className="fondo-borroso"></div>

      <button className="boton-home" onClick={() => navigate('/')}>
        Home
      </button>

      <div className="contenido-nitido">
        <h1 className="titulo-contacto">Mis Contactos</h1>

        <div className="instagram-container">
          <a
            href="https://www.instagram.com/estuardo_cast04/"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-link"
          >
            <img src={InstaIcon} alt="Instagram icon" className="insta-img" />
            <span className="insta-texto">Mi Instagram</span>
          </a>
        </div>

        <div className="cv-container">
          <a href={MiCV} download="Estuardo_Castro_CV.pdf" className="boton-cv">
            Descargar <span className="flecha">&#8595;</span>
          </a>
          <span className="cv-texto">Mi CV</span>
        </div>
      </div>
    </div>
  );
};

export default Contacto;