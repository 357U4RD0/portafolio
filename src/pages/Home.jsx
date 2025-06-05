import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FondoGen from '../components/FondoGen';
import TextoConstruido from '../components/TextoConstruido';
import Pacman from '../components/Pacman';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const proyectosRef = useRef(null);
  const pacmanRef = useRef(null);
  const [mostrarTitulo, setMostrarTitulo] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';

    gsap.set(pacmanRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.8
    });

    ScrollTrigger.create({
      trigger: proyectosRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        setMostrarTitulo(true);

        setTimeout(() => {
          gsap.to(pacmanRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)"
          });
        }, 1500);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <FondoGen />

      <section className="pantalla-completa centro-contenido">
        <TextoConstruido texto="Estuardo Castro" tamaño={90} />
      </section>

      <section
        ref={proyectosRef}
        className="pantalla-completa centro-columna z-alto"
        style={{ gap: '40px', position: 'relative' }}
      >
        {mostrarTitulo && (
          <div
            ref={pacmanRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              position: 'relative'
            }}
          >
            <div
              style={{
                position: 'relative',
                top: '-100px',
                left: '-250px'
              }}
            >
              <TextoConstruido texto="Mis Proyectos" tamaño={48} />
            </div>

            <Pacman />
          </div>
        )}
      </section>
    </>
  );
};

export default Home;