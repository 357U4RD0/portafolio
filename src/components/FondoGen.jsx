import React, { useRef, useEffect } from 'react';

const FondoGen = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width, height;
    const squareSize = 12;
    const spacing = 8;
    const step = squareSize + spacing;

    let cols;
    let drops;

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      cols = Math.floor(width / step);
      // Inicializamos con valores negativos aleatorios grandes para escalonar el inicio
      drops = new Array(cols).fill(0).map(() => -Math.floor(Math.random() * 100));
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = 'limegreen';

      for (let i = 0; i < cols; i++) {
        const x = i * step;
        const y = drops[i] * step;

        if (y > 0) {
          ctx.fillRect(x, y, squareSize, squareSize);

          ctx.fillStyle = 'rgba(50, 205, 50, 0.4)';
          ctx.fillRect(x, y - step, squareSize, squareSize);

          ctx.fillStyle = 'rgba(50, 205, 50, 0.2)';
          ctx.fillRect(x, y - 2 * step, squareSize, squareSize);

          ctx.fillStyle = 'limegreen';
        }

        drops[i]++;

        if (y > height && Math.random() > 0.975) {
          drops[i] = -Math.floor(Math.random() * 100);
        }
      }
    };

    init();
    const interval = setInterval(draw, 50);

    window.addEventListener('resize', init);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100vw',
        height: '100vh',
        display: 'block',
      }}
    />
  );
};

export default FondoGen;