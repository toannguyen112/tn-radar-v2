'use client';
import React from 'react'

function NoiseBackground() {

  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas: any = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let requestId: any;

    const width = canvas.width;
    const height = canvas.height;

    const draw = () => {
      for (let y = 0; y < height; y += 4) {
        for (let x = 0; x < width; x += 4) {
          const r = Math.floor(Math.random() * 50);
          ctx.fillStyle = `rgb(${r},${r},${r})`;
          ctx.fillRect(x, y, 4, 4);
        }
      }
      requestId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div className="bg md:block hidden"></div>
  )
}

export default NoiseBackground