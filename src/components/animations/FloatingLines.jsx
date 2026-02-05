import { useEffect, useRef } from 'react';
import './FloatingLines.css';

const FloatingLines = ({
  enabledWaves = ["top", "middle", "bottom"],
  lineCount = 5,
  lineDistance = 5,
  bendRadius = 5,
  bendStrength = -0.5,
  interactive = true,
  parallax = true,
  mixBlendMode = "normal"
}) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const linesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initLines();
    };

    const initLines = () => {
      linesRef.current = [];
      const height = canvas.height;
      const positions = {
        top: height * 0.2,
        middle: height * 0.5,
        bottom: height * 0.8
      };

      enabledWaves.forEach(wave => {
        const baseY = positions[wave];
        for (let i = 0; i < lineCount; i++) {
          linesRef.current.push({
            y: baseY + (i * lineDistance),
            offset: Math.random() * Math.PI * 2,
            speed: 0.5 + Math.random() * 0.5,
            amplitude: 20 + Math.random() * 30,
            wave: wave
          });
        }
      });
    };

    const handleMouseMove = (e) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const drawLine = (line, time) => {
      ctx.beginPath();
      const points = [];
      const segments = 100;

      for (let i = 0; i <= segments; i++) {
        const x = (canvas.width / segments) * i;
        let y = line.y;

        y += Math.sin((x * 0.01) + time * line.speed + line.offset) * line.amplitude;

        if (interactive) {
          const dx = x - mouseRef.current.x;
          const dy = y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            const force = (1 - distance / maxDistance) * bendStrength * 50;
            y += force;
          }
        }

        if (parallax) {
          const parallaxOffset = (line.y / canvas.height) * 20;
          y += Math.sin(time * 0.3) * parallaxOffset;
        }

        points.push({ x, y });
      }

      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        const xc = (points[i].x + points[i - 1].x) / 2;
        const yc = (points[i].y + points[i - 1].y) / 2;
        ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
      }

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
      gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.2)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.1)');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;

      linesRef.current.forEach(line => {
        drawLine(line, time);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabledWaves, lineCount, lineDistance, bendRadius, bendStrength, interactive, parallax]);

  return <canvas ref={canvasRef} className="floating-lines" style={{ mixBlendMode }} />;
};

export default FloatingLines;
