import { useEffect, useRef } from 'react';
import './LightRays.css';

const LightRaysFallback = ({
  raysColor = '#ffffff',
  raysSpeed = 1,
  lightSpread = 0.5,
  className = ''
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;
    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      ctx.clearRect(0, 0, width, height);
      
      // Create gradient rays
      const rayCount = 8;
      const centerX = width / 2;
      const centerY = 0;
      
      for (let i = 0; i < rayCount; i++) {
        const angle = (Math.PI / 3) * (i / rayCount) - Math.PI / 6;
        const rayWidth = 30 + Math.sin(time * raysSpeed + i) * 10;
        
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle);
        
        const gradient = ctx.createLinearGradient(0, 0, 0, height * 2);
        const opacity = 0.3 + Math.sin(time * raysSpeed * 0.5 + i * 0.5) * 0.2;
        gradient.addColorStop(0, `${raysColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${raysColor}${Math.floor(opacity * 0.5 * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${raysColor}00`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(-rayWidth / 2, 0, rayWidth, height * 2);
        ctx.restore();
      }
      
      time += 0.016;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [raysColor, raysSpeed, lightSpread, className]);

  return <canvas ref={canvasRef} className={`light-rays-canvas ${className}`} />;
};

export default LightRaysFallback;
