import React, { useEffect, useRef, useState } from 'react';

const InteractiveDotGrid = ({
  dotColorDark = 'rgba(99, 102, 241, 0.08)', // Indigo-500 tint
  dotColorLight = 'rgba(15, 23, 42, 0.07)',
  hoverColorDark = 'rgba(6, 182, 212, 0.95)', // Neon Cyan-500
  hoverColorLight = 'rgba(14, 165, 233, 0.85)',
  baseRadius = 1.0,
  maxRadius = 3.2,
  hoverRadius = 140,
  magneticStrength = 0.12, // Responsive magnetic pull
  gridSpacing = 16 // Fine dotted density spacing
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to premium dark theme

  // Sync theme changes
  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let dots = [];
    let particles = [];
    let mouse = { x: null, y: null, active: false, targetX: null, targetY: null };
    let width = 0;
    let height = 0;

    // Responsive High-DPI canvas resizing
    const resizeCanvas = () => {
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Initialize both grids and drifting particles
      initDotsAndParticles();
    };

    const initDotsAndParticles = () => {
      dots = [];
      particles = [];

      // 1. Grid of dots
      const padding = 16;
      const cols = Math.floor((width - padding * 2) / gridSpacing) + 1;
      const rows = Math.floor((height - padding * 2) / gridSpacing) + 1;

      const startX = padding + (width - padding * 2 - (cols - 1) * gridSpacing) / 2;
      const startY = padding + (height - padding * 2 - (rows - 1) * gridSpacing) / 2;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = startX + c * gridSpacing;
          const y = startY + r * gridSpacing;
          dots.push({
            x: x,
            y: y,
            currentX: x,
            currentY: y,
            size: baseRadius,
            alpha: isDarkMode ? 0.08 : 0.07,
            color: isDarkMode ? dotColorDark : dotColorLight
          });
        }
      }

      // 2. Glowing drifting particles (neon blue, cyan, purple)
      const particleCount = Math.min(45, Math.floor((width * height) / 22000));
      const colors = [
        'rgba(6, 182, 212, ',  // Cyan
        'rgba(59, 130, 246, ',  // Neon Blue
        'rgba(139, 92, 246, '   // Purple
      ];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 0.8 + Math.random() * 1.8,
          speedY: 0.15 + Math.random() * 0.35,
          amplitude: 4 + Math.random() * 12,
          frequency: 0.005 + Math.random() * 0.015,
          angle: Math.random() * Math.PI * 2,
          alpha: 0.08 + Math.random() * 0.28,
          colorPrefix: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    // Tracking mouse and touches
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = null;
      mouse.targetY = null;
    };

    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
      }
    };

    const handleTouchEnd = () => {
      mouse.active = false;
    };

    // Bind event listeners to parent container (Hero section)
    const container = containerRef.current;
    const parent = container?.parentElement || container;

    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);
    parent.addEventListener('touchstart', handleTouchStart, { passive: true });
    parent.addEventListener('touchmove', handleTouchMove, { passive: true });
    parent.addEventListener('touchend', handleTouchEnd);

    // Resize observer
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(container);

    resizeCanvas();

    // Rendering animation loop (60 FPS)
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Dynamic mouse coordinate easing
      if (mouse.targetX !== null && mouse.targetY !== null) {
        if (mouse.x === null) mouse.x = mouse.targetX;
        if (mouse.y === null) mouse.y = mouse.targetY;
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;
      }

      // 1. Draw glowing drifting particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speedY;
        p.angle += p.frequency;

        // Loop back up from bottom when particle leaves top screen boundary
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        const currentX = p.x + Math.sin(p.angle) * p.amplitude;

        ctx.beginPath();
        ctx.arc(currentX, p.y, p.radius, 0, Math.PI * 2);

        // Draw soft glow ring around large particles
        if (p.radius > 1.6 && isDarkMode) {
          ctx.fillStyle = `${p.colorPrefix}${p.alpha * 0.35})`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = `${p.colorPrefix}1)`;
        } else {
          ctx.fillStyle = `${p.colorPrefix}${p.alpha})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      }
      ctx.shadowBlur = 0; // Reset shadow effects for other elements

      // 2. Draw glowing background radial aura around cursor
      if (mouse.active && mouse.x !== null && mouse.y !== null) {
        const glowRad = hoverRadius * 1.6;
        const radialGrad = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, glowRad
        );

        if (isDarkMode) {
          // Immersive Neon Cyan and Deep Purple blend
          radialGrad.addColorStop(0, 'rgba(6, 182, 212, 0.16)');  // Cyan
          radialGrad.addColorStop(0.4, 'rgba(139, 92, 246, 0.06)'); // Purple
          radialGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
          // Soft cyan light aura
          radialGrad.addColorStop(0, 'rgba(14, 165, 233, 0.12)');
          radialGrad.addColorStop(0.6, 'rgba(56, 189, 248, 0.03)');
          radialGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        }

        ctx.fillStyle = radialGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, glowRad, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Draw grid matrix of reactive dots
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        let dx = 0;
        let dy = 0;
        let dist = 999999;

        if (mouse.active && mouse.x !== null && mouse.y !== null) {
          dx = mouse.x - dot.x;
          dy = mouse.y - dot.y;
          dist = Math.sqrt(dx * dx + dy * dy);
        }

        let targetSize = baseRadius;
        let targetAlpha = isDarkMode ? 0.08 : 0.06;
        let targetX = dot.x;
        let targetY = dot.y;
        let color = isDarkMode ? dotColorDark : dotColorLight;

        if (dist < hoverRadius) {
          const force = (hoverRadius - dist) / hoverRadius; // 0 to 1
          const easeForce = Math.pow(force, 2.0); // Smooth scaling acceleration

          targetSize = baseRadius + (maxRadius - baseRadius) * easeForce;
          targetAlpha = 0.12 + 0.82 * easeForce;

          // Magnetic pull towards cursor
          targetX = dot.x + dx * easeForce * magneticStrength;
          targetY = dot.y + dy * easeForce * magneticStrength;

          color = isDarkMode ? hoverColorDark : hoverColorLight;
        }

        // Kinetic transitions
        dot.size += (targetSize - dot.size) * 0.15;
        dot.alpha += (targetAlpha - dot.alpha) * 0.15;
        dot.currentX += (targetX - dot.currentX) * 0.18;
        dot.currentY += (targetY - dot.currentY) * 0.18;

        // Draw dot circle
        ctx.beginPath();
        ctx.arc(dot.currentX, dot.currentY, dot.size, 0, Math.PI * 2);

        // Dynamically insert opacity alpha in the color prefix
        const dotRgba = color.replace(/[\d.]+\)$/g, `${dot.alpha.toFixed(3)})`);
        ctx.fillStyle = dotRgba;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Event cleaning
    return () => {
      cancelAnimationFrame(animationFrameId);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      parent.removeEventListener('touchstart', handleTouchStart);
      parent.removeEventListener('touchmove', handleTouchMove);
      parent.removeEventListener('touchend', handleTouchEnd);
      resizeObserver.disconnect();
    };
  }, [isDarkMode, dotColorDark, dotColorLight, hoverColorDark, hoverColorLight, baseRadius, maxRadius, hoverRadius, magneticStrength, gridSpacing]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block pointer-events-none" />
    </div>
  );
};

export default InteractiveDotGrid;
