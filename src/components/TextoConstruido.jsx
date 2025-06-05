import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const TextoConstruido = ({ texto = 'Estuardo Castro', tamaño = 90 }) => {
  const contenedorRef = useRef(null);
  const [pixeles, setPixeles] = useState([]);
  const pixelSize = 5;

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const paddingX = 30;
    const paddingY = 40;

    ctx.font = `${tamaño}px 'PressStart2P', monospace`;
    const textWidth = ctx.measureText(texto).width;
    const textHeight = tamaño * 1.3;

    canvas.width = Math.ceil(textWidth + paddingX * 2);
    canvas.height = Math.ceil(textHeight + paddingY * 2);

    ctx.font = `${tamaño}px 'PressStart2P', monospace`;
    ctx.textBaseline = 'top';
    ctx.fillStyle = 'white';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(texto, paddingX, paddingY);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const pixelData = [];

    for (let y = 0; y < canvas.height; y += pixelSize) {
      for (let x = 0; x < canvas.width; x += pixelSize) {
        const index = (y * canvas.width + x) * 4;
        const alpha = data[index + 3];
        if (alpha > 50) {
          pixelData.push({ x, y });
        }
      }
    }

    setPixeles(pixelData);
  }, [texto, tamaño]);

  useEffect(() => {
    if (pixeles.length === 0) return;

    const bloques = contenedorRef.current.querySelectorAll('.bloque');

    bloques.forEach((bloque) => {
      gsap.set(bloque, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0,
        scale: 0.3,
      });
    });

    gsap.to(bloques, {
      duration: 1.5,
      x: (i) => pixeles[i].x,
      y: (i) => pixeles[i].y,
      opacity: 1,
      scale: 1,
      ease: 'power3.out',
      stagger: 0.006,
    });
  }, [pixeles]);

  return (
    <div
      ref={contenedorRef}
      style={{
        position: 'relative',
        width: 'fit-content',
        height: 'fit-content',
        userSelect: 'none',
        pointerEvents: 'none',
        overflow: 'visible',
        background: 'transparent',
        zIndex: 10,
      }}
    >
      {pixeles.map((p, i) => (
        <div
          key={i}
          className="bloque"
          style={{
            position: 'absolute',
            width: pixelSize,
            height: pixelSize,
            backgroundColor: 'white',
            left: 0,
            top: 0,
            borderRadius: 1,
            boxShadow: '0 0 5px white',
          }}
        />
      ))}
    </div>
  );
};

export default TextoConstruido;