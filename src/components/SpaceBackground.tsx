import { useEffect, useRef } from "react";
import spaceImage from "@/assets/space-background.png";

export const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stars
    const stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and animate stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Twinkle effect
        star.opacity += Math.random() * 0.02 - 0.01;
        star.opacity = Math.max(0.3, Math.min(1, star.opacity));

        // Slow drift
        star.y += star.speed * 0.1;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base space image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${spaceImage})` }}
      />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background opacity-80" />
      
      {/* Moving gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink/15 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "4s" }} />
      
      {/* Light streaks */}
      <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet/30 to-transparent animate-streak" />
      <div className="absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-pink/20 to-transparent animate-streak" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple/25 to-transparent animate-streak" style={{ animationDelay: "5s" }} />
      
      {/* Star canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
    </div>
  );
};
