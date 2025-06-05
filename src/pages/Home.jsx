import React, { useEffect, useRef, useState } from 'react';
import FondoGen from '../components/FondoGen';
import TextoConstruido from '../components/TextoConstruido';
import Pacman from '../components/Pacman';
import Kirby from '../components/Kirby';
import Pokeball from '../components/Pokeball';
import { AnimacionesHome, crearScrollTriggerHome, limpiarScrollTriggers } from '../animations/AniHome';

const Home = () => {
  const proyectosRef = useRef(null);
  const pacmanRef = useRef(null);
  const kirbyRef = useRef(null);
  const pokeballRef = useRef(null);

  const [mostrarSecciones, setMostrarSecciones] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';

    if (mostrarSecciones) {
      const timer = setTimeout(() => {
        AnimacionesHome({ pacmanRef, kirbyRef, pokeballRef });
      }, 0);
      return () => clearTimeout(timer);
    }

    const scrollTriggerInstance = crearScrollTriggerHome(proyectosRef, setMostrarSecciones);

    return () => {
      limpiarScrollTriggers();
    };
  }, [mostrarSecciones]);

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
        {mostrarSecciones && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '100px'
            }}
          >
            {/* Primera fila: Pacman y Kirby */}
            <div style={{ display: 'flex', gap: '550px', justifyContent: 'center', width: '100%' }}>
              {/* Mis Proyectos - Pacman */}
              <div ref={pacmanRef} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ position: 'absolute', top: '-120px', left: '-100%', transform: 'translateX(-50%)' }}>
                  <TextoConstruido texto="Mis Proyectos" tamaño={40} />
                </div>
                <Pacman />
              </div>

              {/* Mis Habilidades - Kirby */}
              <div ref={kirbyRef} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ position: 'absolute', top: '-120px', left: '-140%', transform: 'translateX(-50%)' }}>
                  <TextoConstruido texto="Mis Habilidades" tamaño={40} />
                </div>
                <Kirby />
              </div>
            </div>

            {/* Segunda fila: Pokeball con Contacto*/}
            <div ref={pokeballRef} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ position: 'absolute', top: '-100px', left: '-70%', transform: 'translateX(-50%)' }}>
                <TextoConstruido texto="Contacto" tamaño={40} />
              </div>
              <Pokeball />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;