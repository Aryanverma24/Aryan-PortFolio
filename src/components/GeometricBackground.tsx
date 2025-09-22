import { useEffect, useRef } from 'react';

interface GeometricBackgroundProps {
  className?: string;
}

export const GeometricBackground = ({ className = '' }: GeometricBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const shapes: Array<{
      x: number;
      y: number;
      size: number;
      rotation: number;
      speed: number;
      opacity: number;
    }> = [];

    // Create floating geometric shapes
    for (let i = 0; i < 15; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 100 + 50,
        rotation: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.002 + 0.001,
        opacity: Math.random() * 0.1 + 0.05,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((shape) => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        
        const gradient = ctx.createLinearGradient(-shape.size/2, -shape.size/2, shape.size/2, shape.size/2);
        gradient.addColorStop(0, `hsla(217, 91%, 60%, ${shape.opacity})`);
        gradient.addColorStop(1, `hsla(189, 95%, 65%, ${shape.opacity})`);
        
        ctx.fillStyle = gradient;
        ctx.strokeStyle = `hsla(217, 91%, 60%, ${shape.opacity * 2})`;
        ctx.lineWidth = 2;

        // Draw triangle
        ctx.beginPath();
        ctx.moveTo(0, -shape.size / 2);
        ctx.lineTo(-shape.size / 2, shape.size / 2);
        ctx.lineTo(shape.size / 2, shape.size / 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.restore();

        // Update rotation
        shape.rotation += shape.speed;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none -z-10 ${className}`}
    />
  );
};