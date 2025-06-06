import React from 'react';
import HabilidadCard from '../components/HabilidadCard';
import FondoConBlur from '../components/FondoconBlur';
import Green from '../assets/Green.webp';
import Barra2 from '../components/Barra2';

const Habilidades = () => {
  return (
    <>
    <Barra2 />
    <div style={{ position: 'relative', minHeight: '100vh', zIndex: 1 }}>
      <FondoConBlur imagenFondo={Green} blur="8px" />

      <div style={{ position: 'absolute', top: 20, left: 20 }}>
        <a href="./" className="boton-home">Home</a>
      </div>

      <h1 style={{
        textAlign: 'center',
        font: 'PressStart2P',
        color: 'black',
        paddingTop: 40,
        fontFamily: 'Press Start 2P'
      }}>
        Mis Habilidades
      </h1>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: 40
      }}>
        <HabilidadCard
          nombre="HTML"
          porcentaje={65}
          modelo="/models/html.glb"
          scale={1.5}
          position={[-2.5, -3.8, 0]}
        />
        <HabilidadCard
          nombre="CSS"
          porcentaje={35}
          modelo="/models/css.glb"
          scale={0.3}
          position={[5, -55, -45]}
        />
        <HabilidadCard
          nombre="JavaScript"
          porcentaje={55}
          modelo="/models/node.glb"
          scale={5}
          position={[0, 0, 0]}
        />
        <HabilidadCard
          nombre="React"
          porcentaje={45}
          modelo="/models/react.glb"
          scale={1.4}
          position={[0, 0, 0]}
        />
      </div>
    </div>
    </>
  );
};

export default Habilidades;