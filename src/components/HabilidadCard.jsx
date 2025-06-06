import React from 'react';
import Logo3D from './Logo3D';
import CountUp from 'react-countup';

const HabilidadCard = ({ nombre, porcentaje, modelo, scale, position }) => (
  <div style={{
    width: 200,
    backgroundColor: '#111',
    border: '3px solid #fff',
    borderRadius: 10,
    padding: 10,
    color: 'white',
    fontFamily: 'Press Start 2P',
    margin: 20,
    textAlign: 'center',
    boxShadow: '0 0 10px lime',
  }}>
    <Logo3D path={modelo} scale={scale} position={position} />
    <h3 style={{ fontSize: 12 }}>{nombre}</h3>
    <p style={{ fontSize: 10 }}>
      <CountUp end={porcentaje} duration={2} />%
    </p>
  </div>
);

export default HabilidadCard;