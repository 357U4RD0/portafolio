import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import FondoGen from '../components/FondoGen';
import TextoConstruido from '../components/TextoConstruido';
import '../styles/globals.css';

const Home = () => {
  const textoRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      textoRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out', delay: 0.5 }
    );
  }, []);

  return (
    <>
      <FondoGen />
      <TextoConstruido />
    </>
  );
};

export default Home;