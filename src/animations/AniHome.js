import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AnimacionesHome = (refsObjetos) => {
  const { pacmanRef, kirbyRef, pokeballRef } = refsObjetos;

  if (pacmanRef.current && kirbyRef.current && pokeballRef.current) {
    gsap.set([pacmanRef.current, kirbyRef.current, pokeballRef.current], {
      opacity: 0,
      y: 50,
      scale: 0.8
    });

    gsap.to(pacmanRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'back.out(1.7)'
    });

    gsap.to(kirbyRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      delay: 0.2,
      ease: 'back.out(1.7)'
    });

    gsap.to(pokeballRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      delay: 0.4,
      ease: 'back.out(1.7)'
    });
  }
};

export const crearScrollTriggerHome = (proyectosRef, setMostrarSecciones) => {
  return ScrollTrigger.create({
    trigger: proyectosRef.current,
    start: 'top 80%',
    onEnter: () => {
      setMostrarSecciones(true);
    },
    once: true
  });
};

export const limpiarScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};